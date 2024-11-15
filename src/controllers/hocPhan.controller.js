'use strict'
const HocPhanService = require('../services/hocPhan.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class HocPhanController {

    create = (req, res) => {
        const hocphan = req.body
        HocPhanService.create(hocphan)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        HocPhanService.getAll()
            .then(hocphans => responseWithTokens(req, res, hocphans, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        HocPhanService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        HocPhanService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    findByHocKyAndChuyenNganh = (req, res) => {
        const { maHocKy, maChuyenNganh } = req.body
        HocPhanService.getByHocKyAndChuyenNganh(maHocKy, maChuyenNganh)
            .then(hocphans => responseWithTokens(req, res, hocphans, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    findByHocKy = (req, res) => {
        const { maHocKy } = req.body
        HocPhanService.getByHocKy(maHocKy)
            .then(hocphans => responseWithTokens(req, res, hocphans, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new HocPhanController()