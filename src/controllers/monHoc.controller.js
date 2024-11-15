'use strict'
const MonHocService = require('../services/monHoc.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class MonHocController {

    create = (req, res) => {
        const monhoc = req.body
        MonHocService.create(monhoc)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        MonHocService.getAll()
            .then(monhocs => responseWithTokens(req, res, monhocs, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        MonHocService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        MonHocService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new MonHocController()