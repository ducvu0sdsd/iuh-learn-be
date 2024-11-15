'use strict'
const GiaoVienService = require('../services/giaoVien.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class GiaoVienController {

    create = (req, res) => {
        const heDaoTao = req.body
        GiaoVienService.create(heDaoTao)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        GiaoVienService.getAll()
            .then(giaoviens => responseWithTokens(req, res, giaoviens, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        GiaoVienService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        GiaoVienService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new GiaoVienController()