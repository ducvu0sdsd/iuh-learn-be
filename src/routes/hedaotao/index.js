'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const heDaoTaoController = require('../../controllers/heDaoTao.controller')
const router = express.Router()

router.post('/create', middleware.checkToken, heDaoTaoController.create)
router.get('/get-all', middleware.checkToken, heDaoTaoController.getAll)
router.delete('/delete/:id', middleware.checkToken, heDaoTaoController.delete)
router.put('/update/:id', middleware.checkToken, heDaoTaoController.update)

module.exports = router  