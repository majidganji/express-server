const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.success({
        ok: true
    }, 'Lorem')
})

module.exports = router;