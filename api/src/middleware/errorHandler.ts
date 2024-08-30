import { ErrorRequestHandler } from "express";

interface RequestHandlerError {
    message: string;
    statusCode: number;
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const error = {} as RequestHandlerError
    const message = ''

    error.statusCode = err.statusCode
    error.message = err.message
    
    return res.status(error.statusCode || 500).json({ success: false, error: error.message ?? "Server error"})
}

export default errorHandler

