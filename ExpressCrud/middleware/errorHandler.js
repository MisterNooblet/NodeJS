import { NOT_FOUND, VALIDATION_ERROR, UNATHORIZED, FORBIDDEN, SERVER_ERROR } from '../constants.js'

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack })
            break;
        case NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
            break;
        case UNATHORIZED:
            res.json({ title: "Unathorized", message: err.message, stackTrace: err.stack })
            break;
        case FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
            break;
        case SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log('No err');
            break;
    }
}

export default errorHandler