'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const changeRequestController = require('../../controllers/changeRequest.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, changeRequestController.create)
router.get('/get-all', middleware.checkToken, changeRequestController.getAll)
router.delete('/delete/:id', middleware.checkToken, changeRequestController.delete)
router.put('/update/:id', middleware.checkToken, changeRequestController.update)

module.exports = router  