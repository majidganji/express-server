module.exports = (req, res, next) => {
    res.validation = (data, message) => {
        return res.status(400).json({
            data,
            message
        })
    }

    res.success = (data, message) => {
        return res.status(200).json({
            data,
            message
        })
    }

    res.customError = (code, message, data = null) => {
        return res.status(code).json({
            data,
            message
        })
    }

    next()
}