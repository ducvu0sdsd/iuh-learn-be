'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const khoaController = require('../../controllers/khoa.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, khoaController.create)
router.get('/get-all', middleware.checkToken, khoaController.getAll)
router.delete('/delete/:id', middleware.checkToken, khoaController.delete)
router.put('/update/:id', middleware.checkToken, khoaController.update)

module.exports = router  