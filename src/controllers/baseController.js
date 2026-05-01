export class BesetController {
    success(res, statusCode, success, message, data) {
        return res.status(statusCode).json({
            statusCode,
            success,
            message,
            data
        });
    } 

    error(res, statusCode, success, message) {
        return res.status(statusCode).json({
            statusCode,
            success,
            message,
        });
    }
}