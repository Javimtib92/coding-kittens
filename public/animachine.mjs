document.addEventListener('alpine:init', () => {
  window.Alpine.directive('animachine', (el, { expression }, { effect }) => {
    const stateMachine = structuredClone(JSON.parse(expression));

    const state = Alpine.reactive({
      currentState: null,
      persistentClass: stateMachine.persistentClass,
      get currentStateClass() {
        return state.states[state.currentState].class;
      },
      states: stateMachine.states,
      locked: false,
    });

    const triggerEvent = (event) => {
      const nextState = state.states[state.currentState].on
        ? state.states[state.currentState].on[event]
        : null;

      changeState(nextState);
    };

    const changeState = (nextState) => {
      if (nextState && !state.locked) {
        state.locked = true;
        state.currentState = nextState;

        if (state.states[state.currentState].timer) {
          const [ms, nextStateAfterTimer] =
            state.states[state.currentState].timer;

          window.setTimeout(() => {
            state.locked = false;

            changeState(nextStateAfterTimer);
          }, ms);
        } else {
          state.locked = false;
        }
      }
    };

    Alpine.magic('trigger', () => (key = null) => {
      if (!state.locked) {
        triggerEvent(key);
      }
    });

    changeState(stateMachine.currentState);

    effect(() => {
      Alpine.mutateDom(() => {
        el.children[0].setAttribute('x-data', JSON.stringify(state));
        el.children[0].setAttribute(
          'class',
          state.persistentClass + ' ' + state.currentStateClass
        );
      });

      el.childNodes.forEach((child) => {
        if (child.nodeType === 1) {
          Alpine.initTree(child);
        }
      });
    });
  });
});
