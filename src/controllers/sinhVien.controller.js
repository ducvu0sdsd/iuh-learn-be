'use strict'
const SinhVienService = require('../services/sinhVien.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class SinhVienController {

    create = (req, res) => {
        const sinhvien = req.body
        SinhVienService.create(sinhvien)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        SinhVienService.getAll()
            .then(sinhviens => responseWithTokens(req, res, sinhviens, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        SinhVienService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        SinhVienService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new SinhVienController()