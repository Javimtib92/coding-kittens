export function getDB(context: Runtime) {
    if (import.meta.env.ENVIRONMENT === 'preview') {
        return context.runtime.env.DB_PREVIEW
    }
    return context.runtime.env.DB;
}