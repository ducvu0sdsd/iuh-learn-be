'use strict'
const HocKyService = require('../services/hocKy.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class HocKyController {

    create = (req, res) => {
        const hocky = req.body
        HocKyService.create(hocky)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        HocKyService.getAll()
            .then(hockys => responseWithTokens(req, res, hockys, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        HocKyService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        HocKyService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new HocKyController()