export default class CustomError {
    static createError({ name = "Error", cause, message, code = 1 }) {
        const error = new Error(message);
        error.name = name;
        error.code = code;

        // Verificar si 'cause' es un error válido y asignarlo
        if (cause instanceof Error) {
            error.cause = cause;
        } else if (cause !== undefined && cause !== null) {
            // Si 'cause' no es un error, asignar un nuevo error con la causa proporcionada
            error.cause = new Error(String(cause));
        } else {
            error.cause = null;
        }

        return error;  // Devolver el error en lugar de lanzarlo
    }
}
