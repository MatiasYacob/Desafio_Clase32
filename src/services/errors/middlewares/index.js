// CustomErrorMiddleware.js
import EErrors from '../errors-enum.js';

export default (error, req, res, next) => {
    console.error('Error detectado entrando al Error Handler:');
    console.error(`Name: ${error.name}`);
    console.error(`Code: ${error.code}`);
    console.error(`Message: ${error.message}`);

    if (error.cause) {
        console.error('Cause:', error.cause.message);
        console.error('Cause Stack:', error.cause.stack);
    }

    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).json({ status: 'error', error: error.message });
            break;
        case EErrors.PRODUCT_NOT_FOUND_ERROR:
            res.status(404).json({ status: 'error', error: error.message });
            break;
        default:
            res.status(500).json({ status: 'error', error: 'Unhandled error!' });
    }
};
