'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const HocKyController = require('../../controllers/hocky.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, HocKyController.create)
router.get('/get-all', middleware.checkToken, HocKyController.getAll)
router.delete('/delete/:id', middleware.checkToken, HocKyController.delete)
router.put('/update/:id', middleware.checkToken, HocKyController.update)

module.exports = router  