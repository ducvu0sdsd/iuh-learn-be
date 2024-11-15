'use strict'
const LopService = require('../services/lop.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class LopController {

    create = (req, res) => {
        const lop = req.body
        LopService.create(lop)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        LopService.getAll()
            .then(lops => responseWithTokens(req, res, lops, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        LopService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        LopService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new LopController()