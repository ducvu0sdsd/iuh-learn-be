'use strict'
const KhoaService = require('../services/khoa.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class KhoaController {

    create = (req, res) => {
        const khoa = req.body
        KhoaService.create(khoa)
            .then(khoaCreated => responseWithTokens(req, res, khoaCreated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        KhoaService.getAll()
            .then(khoas => responseWithTokens(req, res, khoas, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        KhoaService.delete(id)
            .then(khoa => responseWithTokens(req, res, khoa, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        KhoaService.update(id, data)
            .then(khoa => responseWithTokens(req, res, khoa, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new KhoaController()