'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const managementController = require('../../controllers/management.controller')
const router = express.Router()

router.post('/create', managementController.create)

module.exports = router  