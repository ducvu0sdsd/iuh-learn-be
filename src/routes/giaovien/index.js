'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const GiaoVienController = require('../../controllers/giaoVien.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, GiaoVienController.create)
router.get('/get-all', middleware.checkToken, GiaoVienController.getAll)
router.delete('/delete/:id', middleware.checkToken, GiaoVienController.delete)
router.put('/update/:id', middleware.checkToken, GiaoVienController.update)

module.exports = router  