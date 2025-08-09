const CSS = (animationStyles: boolean) => `.navbar {
    display: flex;
    position: sticky;
    padding: 1rem 0.5rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
    flex-direction: row;
    align-items: flex-start;
    top: 0;
  
    @media (min-width: 768px) {
      padding: 1rem 1.25rem;
    }
  }
  
  .backdrop {
    position: absolute;
    top: 0;
    min-width: 100%;
    height: 5rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    left: -8px;
    right: -8px;
  
    @media (min-width: 768px) {
      margin-right: -28px;
      margin-left: -28px;
    }
  }
  
 ${
   animationStyles
     ? `.navbar .navbar-content {
  transition: transform 0.3s ease;
  will-change: transform;
  transform: translateY(calc(0px - var(--navbar-shrink) * 12px));
}
.navbar .backdrop {
  transition: transform 0.3s ease;
  will-change: transform;
  transform: translateY(calc(0px - var(--navbar-shrink) * 24px));
}

.navbar .logo {
  transition: transform 0.3s ease;
  will-change: transform;
  transform: scale(calc(1 - var(--navbar-shrink) * 0.2));
}

.navbar .site-name > p {
  transition: opacity 0.3s ease;
  opacity: calc(1 - var(--navbar-shrink));
}

@supports (animation-timeline: scroll()) {
  .navbar {
    --navbar-shrink: 1;

    animation: shrink;
    animation-timeline: scroll(nearest block);
    animation-timing-function: ease;
  }
}

@keyframes shrink {
  0% {
    --navbar-shrink: 0;
  }
  10%,
  100% {
    --navbar-shrink: 1;
  }
}
 `
     : ""
 } 
.navbar-content {
  display: flex;
  z-index: 10;
  margin-left: 0;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100%;
}

.logo {
  margin-right: 1rem;
}

.logo-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
}

.site-name {
  display: flex;
  flex-direction: column;
}

.site-name > p {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

.navigation-links-container {
  display: flex;
  flex-direction: row-reverse;
  gap: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
}

.navigation-links {
  display: none;
  flex-direction: row;
  align-items: center;

  @media (min-width: 640px) {
    display: flex;
  }
}

.navigation-links a {
  position: relative;
  padding: 0.25rem 0.5rem;
}

.scrollable-container {
  min-height: 150dvh;
}

body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  background-color: color-mix(in srgb, slategrey 100%, black 100%);
  color: white;
}
`;

const HTML = (noScrollableContent: boolean) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shrink a sticky navigation bar</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <nav class="navbar">
        <div class="backdrop"></div>
        <div class="navbar-content">
          <a href="/" class="logo-link">
            <svg class="logo" width="48" height="48" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <path d="m80 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40z" fill="#1D2633"/>
            <path d="m69.714 50.213c1.3508 0 2.3116 1.3128 1.8036 2.5644-5.0506 12.446-17.259 21.222-31.517 21.222-14.258 0-26.467-8.7767-31.517-21.222-0.50797-1.2516 0.45285-2.5644 1.8037-2.5644h59.427z" fill="#EDEBDE"/>
            <path d="m71.517 27.222c0.508 1.2517-0.4528 2.5645-1.8036 2.5645h-59.427c-1.3508 0-2.3116-1.3128-1.8037-2.5645 5.0507-12.446 17.259-21.222 31.517-21.222 14.258 0 26.467 8.7767 31.517 21.222z" fill="#EDEBDE"/>
            <path d="m69.837 37.15c2.2472 0 3.3316 1.5678 3.3316 3.3838v3.41h-2.3517v-3.0049c0-0.8231-0.3005-1.5025-1.1628-1.5025s-1.1497 0.6794-1.1497 1.5025v3.0049h-2.3517v-3.0049c0-0.8231-0.2874-1.5025-1.1497-1.5025s-1.1628 0.6794-1.1628 1.5025v3.0049h-2.3517v-3.41c0-1.816 1.0844-3.3838 3.3316-3.3838 1.2281 0 2.1165 0.4834 2.5215 1.2804 0.4312-0.797 1.3719-1.2804 2.4954-1.2804z" fill="#EDEBDE"/>
            <path d="m57.263 41.853c0.7578 0 1.0844-0.6924 1.0844-1.5155v-2.9266h2.3517v3.214c0 1.9205-1.1236 3.5145-3.4361 3.5145s-3.436-1.594-3.436-3.5145v-3.214h2.3516v2.9266c0 0.8231 0.3267 1.5155 1.0844 1.5155z" fill="#EDEBDE"/>
            <path d="m50.369 44.153c-1.4763 0-2.4301-0.5095-2.9918-1.5024l1.6984-0.9538c0.2352 0.4181 0.5879 0.6271 1.1758 0.6271 0.4834 0 0.7055-0.1698 0.7055-0.3788 0-0.797-3.4491 0.013-3.4491-2.5216 0-1.2281 1.0452-2.221 2.822-2.221 1.5548 0 2.404 0.7577 2.7829 1.4894l-1.6985 0.9668c-0.1437-0.392-0.5879-0.6271-1.0321-0.6271-0.3397 0-0.5226 0.1437-0.5226 0.3397 0 0.81 3.4491 0.0653 3.4491 2.5215 0 1.3718-1.3456 2.2602-2.9396 2.2602z" fill="#EDEBDE"/>
            <path d="m42.152 46.949h-2.3517v-6.2842c0-1.9989 1.5025-3.4492 3.5929-3.4492 2.0381 0 3.5928 1.5548 3.5928 3.4492 0 2.0904-1.3848 3.4753-3.4622 3.4753-0.4834 0-0.9668-0.1437-1.3718-0.3659v3.1748zm1.2412-5.0169c0.7447 0 1.2411-0.5749 1.2411-1.2542 0-0.6925-0.4964-1.2543-1.2411-1.2543s-1.2412 0.5618-1.2412 1.2543c0 0.6793 0.4965 1.2542 1.2412 1.2542z" fill="#EDEBDE"/>
            <path d="m37.445 36.719c-0.7708 0-1.411-0.6402-1.411-1.411 0-0.7709 0.6402-1.4111 1.411-1.4111 0.7709 0 1.4111 0.6402 1.4111 1.4111 0 0.7708-0.6402 1.411-1.4111 1.411zm-1.1758 0.6924h2.3517v6.5325h-2.3517v-6.5325z" fill="#EDEBDE"/>
            <path d="m31.757 44.14c-2.0381 0-3.5929-1.5678-3.5929-3.4753 0-1.8944 1.5548-3.4622 3.5929-3.4622s3.5929 1.5678 3.5929 3.4622c0 1.9075-1.5548 3.4753-3.5929 3.4753zm0-2.208c0.7447 0 1.2412-0.5749 1.2412-1.2542 0-0.6925-0.4965-1.2673-1.2412-1.2673s-1.2412 0.5748-1.2412 1.2673c0 0.6793 0.4965 1.2542 1.2412 1.2542z" fill="#EDEBDE"/>
            <path d="m23.724 47.145c-1.6201 0-2.7959-0.7186-3.3969-1.9989l1.9467-1.0452c0.209 0.4442 0.601 0.9015 1.411 0.9015 0.8492 0 1.411-0.5357 1.4763-1.4764-0.3135 0.2744-0.81 0.4834-1.5547 0.4834-1.816 0-3.2793-1.3979-3.2793-3.3577 0-1.8944 1.5547-3.4361 3.5929-3.4361 2.0903 0 3.5928 1.4503 3.5928 3.4492v2.5869c0 2.3516-1.6331 3.8933-3.7888 3.8933zm0.1568-5.3436c0.7055 0 1.2411-0.4834 1.2411-1.2019 0-0.7055-0.5356-1.1759-1.2411-1.1759-0.6925 0-1.2412 0.4704-1.2412 1.1759 0 0.7185 0.5487 1.2019 1.2412 1.2019z" fill="#EDEBDE"/>
            <path d="m16.337 44.14c-2.0381 0-3.5929-1.5678-3.5929-3.4753 0-1.8944 1.5548-3.4622 3.5929-3.4622s3.5929 1.5678 3.5929 3.4622c0 1.9075-1.5548 3.4753-3.5929 3.4753zm0-2.208c0.7447 0 1.2412-0.5749 1.2412-1.2542 0-0.6925-0.4965-1.2673-1.2412-1.2673s-1.2412 0.5748-1.2412 1.2673c0 0.6793 0.4965 1.2542 1.2412 1.2542z" fill="#EDEBDE"/>
            <path d="m8.4622 35.125v6.5978h3.8933v2.221h-4.2199c-1.4894 0-2.0904-0.7839-2.0904-2.0251v-6.7937h2.417z" fill="#EDEBDE"/>
            <path d="m34 6.5277c1.9477-0.34679 3.9527-0.52774 6.0001-0.52774 2.0473 0 4.0523 0.18095 5.9999 0.52773v23.259h-12v-23.259z" fill="#AC2828"/>
            <path d="m46 50.213h-12.001c-0.0252 5.2179-0.9759 10.39-2.8084 15.277l-2.4724 6.593c3.5301 1.2413 7.3269 1.9164 11.281 1.9164 3.9544 0 7.7512-0.6751 11.281-1.9164l-2.4724-6.593c-1.8325-4.8868-2.7832-10.059-2.8084-15.277z" fill="#AC2828"/>
            <path d="m46 6.5277c4.3408 0.77289 8.3967 2.3695 12 4.6225v18.636h-12v-23.259z" fill="#306A9F"/>
            <path d="m51.281 72.084c5.4574-1.9189 10.278-5.1908 14.058-9.4132l-0.5899-0.3754c-4.1436-2.6369-6.6762-7.1803-6.7477-12.082h-12.001c0.0252 5.2179 0.9759 10.39 2.8085 15.277l2.4723 6.593z" fill="#306A9F"/>
            <path d="m22 11.15c3.6033-2.253 7.6591-3.8496 12-4.6225v23.259h-12v-18.636z" fill="#DEB038"/>
            <path d="m21.998 50.213h12.001c-0.0251 5.1956-0.9678 10.346-2.785 15.215l-2.4958 6.6556c-5.4575-1.9189-10.278-5.1908-14.058-9.4132l0.5899-0.3754c4.1436-2.6369 6.6763-7.1803 6.7478-12.082z" fill="#DEB038"/>
            </svg>          
            <div class="site-name">
              <p>Your site</p>
            </div>
          </a>
          <div class="navigation-links-container">
            <div class="navigation-links">
              <a>Home</a>
              <a>Blog</a>
            </div>
          </div>
        </div>
      </nav>
      <script>
        (function () {
          const navbar = document.querySelector(".navbar");

          if (!CSS.supports("animation-timeline: scroll()")) {
            const threshold = 500; // Adjust this threshold as needed

            window.addEventListener("scroll", handleScroll);

            function handleScroll() {
              if (!navbar) {
                return;
              }

              const scrollY = window.scrollY || window.pageYOffset;

              if (scrollY > threshold) {
                navbar.style.setProperty("--navbar-shrink", "1");
              } else {
                navbar.style.setProperty("--navbar-shrink", "0");
              }
            }
          }
        })();
      </script>
      ${
        noScrollableContent
          ? ""
          : `<div class="scrollable-container">
      <p>
        Sociosqu netus hac auctor, pulvinar suscipit dictum consectetur?
        Sapien odio gravida ante laoreet. Nullam viverra habitant, primis
        lectus commodo auctor turpis eu netus curabitur? Litora enim fringilla
        semper at senectus pretium mollis justo consectetur montes. Posuere
        sed suspendisse pretium elementum tempor cursus amet vel hac ac
        sociis. Curae; placerat eleifend laoreet posuere venenatis imperdiet
        mi nisl mauris nisi. Congue platea luctus sem ante sagittis non nulla?
        Interdum ligula orci enim litora morbi nulla.
      </p>
      <p>
        Dolor sem tempor vitae luctus sem habitant. Consectetur rutrum
        volutpat non vestibulum porta! Massa luctus est malesuada ullamcorper
        parturient feugiat nostra conubia. Egestas elementum elementum aliquet
        turpis dictumst aenean class habitant nullam arcu lacus. Vel posuere
        diam dapibus etiam. Duis tellus, conubia justo accumsan feugiat. Nisi
        duis cum auctor sagittis praesent rhoncus vehicula quis dictumst
        sapien.
      </p>
      <p>
        Dictum ornare erat class tincidunt. Ad vel dis erat morbi. Auctor
        fusce feugiat potenti porta; volutpat mauris varius maecenas. Blandit
        porta scelerisque mattis per nullam. Parturient ad magna libero augue
        mi feugiat bibendum auctor. Urna habitasse ornare volutpat volutpat.
        Rutrum interdum lacus commodo maecenas arcu taciti. Id libero; dui
        montes ornare potenti nostra. Praesent volutpat est tortor tincidunt
        ipsum massa convallis. Per pulvinar facilisis.
      </p>
      <p>
        Velit, potenti ullamcorper ridiculus nisi mauris. Id at proin
        convallis turpis arcu curabitur. Hendrerit morbi montes praesent
        vestibulum habitant nunc mattis egestas in consectetur. Sagittis eu
        posuere vivamus platea fermentum, malesuada amet varius! Arcu lacus
        conubia venenatis velit mollis eget diam tristique facilisi mus auctor
        pulvinar. Ac ornare risus duis ullamcorper nulla tortor. Netus nulla
        habitasse quisque mollis maecenas. Mattis magnis nullam.
      </p>
      <p>
        Nec, porta nulla eleifend nec. Iaculis ante tortor per aptent tempor.
        Accumsan facilisis etiam lobortis ligula tristique sed. Sapien mus
        felis nunc proin accumsan dis habitant quam integer cum suscipit.
        Natoque, cum conubia pretium. Et pulvinar platea massa nunc. Semper
        aliquam at ultrices dis nibh felis integer lacus pharetra non
        imperdiet magnis! Rutrum cum massa, morbi imperdiet mauris et
        lobortis. Magna elementum risus potenti aptent rhoncus per lectus
        rhoncus et iaculis magna. Orci nam dictum montes sollicitudin semper
        primis rutrum vitae luctus iaculis! Suspendisse sociis condimentum
        mus.
      </p>
      <p>
        Libero eu fringilla scelerisque. Magnis fames tristique quisque
        senectus metus. Vitae arcu habitasse integer et. Diam etiam senectus
        eu curae; molestie iaculis phasellus eros. Ipsum vel magnis
        suspendisse libero enim iaculis inceptos. Taciti; ipsum tempor
        dignissim lobortis urna. Vestibulum et rutrum felis euismod. Nostra
        magna cursus primis? Nunc eget montes semper bibendum consectetur.
        Turpis nec elementum turpis nostra neque vulputate mus aenean tempor
        elit etiam orci? Commodo vivamus taciti mattis nullam.
      </p>
      <p>
        Feugiat ornare massa porttitor interdum velit sagittis faucibus,
        conubia phasellus cras nulla! Nisi nascetur litora, sollicitudin
        primis et class mattis. Posuere senectus, ac rutrum massa orci duis
        leo per leo hendrerit urna. Consectetur sollicitudin sed dictumst
        ullamcorper erat eget et nisl. Ornare nec aenean hac est. Nostra vitae
        justo volutpat sociis. At ante elementum netus ac ac curabitur augue
        at vehicula primis inceptos. Lacinia torquent tempus primis hac hac
        magnis gravida non. Malesuada fames scelerisque phasellus, consequat
        porta commodo cursus nam justo posuere! Urna cursus donec scelerisque
        pulvinar pulvinar id nostra. Commodo.
      </p>
      <p>
        Nostra arcu felis bibendum fusce odio tortor porta. Feugiat erat
        vehicula hac velit, molestie hac! Tellus donec nisi ridiculus, fames
        sem purus nec lacinia nunc curae;. Varius nam curae; duis dictum ad
        ultrices mollis leo nullam est fames bibendum. Quisque purus at curae;
        commodo dis sed phasellus. Lacinia himenaeos consectetur malesuada.
        Ultricies sem sociosqu erat; est quam est tortor arcu vitae porta
        praesent! Luctus fermentum aenean, dictumst eros montes phasellus diam
        vel. Leo cum, etiam purus est? Vivamus risus pharetra turpis erat
        aptent. Mollis, turpis nec vel? Porttitor odio inceptos eget penatibus
        inceptos praesent amet eget.
      </p>
      <p>
        Vel commodo ullamcorper natoque rhoncus volutpat cubilia tincidunt id
        hac integer. Praesent id consectetur lacinia quam fringilla duis
        cubilia condimentum! Imperdiet sodales facilisis nulla nam, non
        maecenas ultrices vehicula luctus lobortis. Facilisis nascetur
        convallis hac dictum pulvinar eros. Adipiscing suspendisse quam duis
        platea sociis. Imperdiet nisl velit ultricies senectus dignissim mi
        lobortis velit. Ullamcorper nascetur inceptos lacinia maecenas
        vehicula tortor orci. Dis adipiscing nulla cubilia fusce? Accumsan
        dignissim sem fames sociis. Cursus dictum taciti eleifend consequat
        rhoncus ultrices elementum morbi? Lobortis rhoncus volutpat ac rhoncus
        dignissim augue, lectus curabitur elementum.
      </p>
      <p>
        Fames senectus odio vulputate iaculis rutrum felis ad. Habitasse
        suscipit aliquet eleifend ante maecenas id faucibus in habitant mus.
        Tempus cubilia morbi ultrices auctor habitasse aenean justo dolor
        placerat ac bibendum mollis. Est fringilla quis quisque facilisi. Est
        aliquet commodo ridiculus litora arcu ridiculus integer neque velit
        imperdiet dignissim. Vehicula vestibulum nulla lectus ad lectus
        sagittis elit vitae elementum et fermentum. Tellus molestie facilisis
        mattis taciti. Cursus bibendum est fusce etiam quisque faucibus non
        metus quis sed commodo. Venenatis habitasse nibh.
      </p>
    </div>`
      }
    </main>
  </body>
</html>
`;

export const getFiles = (
  options: {
    animationStyles: boolean;
    noScrollableContent: boolean;
  } = {
    animationStyles: false,
    noScrollableContent: false,
  },
) => ({
  "/styles.css": {
    code: CSS(options.animationStyles),
    active: true,
  },
  "/index.html": HTML(options.noScrollableContent),
});
