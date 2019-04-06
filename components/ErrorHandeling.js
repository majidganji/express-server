const logger = require('./Logger')
module.exports =  (req, res, next) => {
    process.removeAllListeners('unhandledRejection')
    process.on('unhandledRejection', (r, p) => {
        logger.error(r)
        res.status(500).json({
            message: 'مشکلی در سمت سرور به وجود آمده است'
        })
    })
    next();
}