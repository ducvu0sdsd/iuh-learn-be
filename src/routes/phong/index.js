'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const PhongController = require('../../controllers/phong.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, PhongController.create)
router.get('/get-all', middleware.checkToken, PhongController.getAll)
router.delete('/delete/:id', middleware.checkToken, PhongController.delete)
router.put('/update/:id', middleware.checkToken, PhongController.update)

module.exports = router  