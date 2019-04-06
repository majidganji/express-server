const express = require('express')
const router = express.Router()

router.use('/category', require('../controllers/api/v1/admin/CategoryController'))

module.exports = router;