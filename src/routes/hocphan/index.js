'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const HocPhanController = require('../../controllers/hocPhan.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, HocPhanController.create)
router.get('/get-all', middleware.checkToken, HocPhanController.getAll)
router.delete('/delete/:id', middleware.checkToken, HocPhanController.delete)
router.put('/update/:id', middleware.checkToken, HocPhanController.update)
router.post('/get-by-hoc-ky-and-chuyen-nganh', middleware.checkToken, HocPhanController.findByHocKyAndChuyenNganh)
router.post('/get-by-hoc-ky', middleware.checkToken, HocPhanController.findByHocKy)

module.exports = router  