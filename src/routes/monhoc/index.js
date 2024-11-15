'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const MonHocController = require('../../controllers/monHoc.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, MonHocController.create)
router.get('/get-all', middleware.checkToken, MonHocController.getAll)
router.delete('/delete/:id', middleware.checkToken, MonHocController.delete)
router.put('/update/:id', middleware.checkToken, MonHocController.update)

module.exports = router  