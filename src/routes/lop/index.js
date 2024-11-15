'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const LopController = require('../../controllers/lop.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, LopController.create)
router.get('/get-all', middleware.checkToken, LopController.getAll)
router.delete('/delete/:id', middleware.checkToken, LopController.delete)
router.put('/update/:id', middleware.checkToken, LopController.update)

module.exports = router  