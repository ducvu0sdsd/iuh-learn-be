'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const chuyenNganhController = require('../../controllers/chuyenNganh.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, chuyenNganhController.create)
router.get('/get-all', middleware.checkToken, chuyenNganhController.getAll)
router.delete('/delete/:id', middleware.checkToken, chuyenNganhController.delete)
router.put('/update/:id', middleware.checkToken, chuyenNganhController.update)

module.exports = router  