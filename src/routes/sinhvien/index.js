'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const SinhVienController = require('../../controllers/sinhVien.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, SinhVienController.create)
router.get('/get-all', middleware.checkToken, SinhVienController.getAll)
router.delete('/delete/:id', middleware.checkToken, SinhVienController.delete)
router.put('/update/:id', middleware.checkToken, SinhVienController.update)

module.exports = router  