'use strict'
const ChuyenNganhService = require('../services/chuyenNganh.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class ChuyenNganhController {

    create = (req, res) => {
        const chuyenNganh = req.body
        ChuyenNganhService.create(chuyenNganh)
            .then(chuyenNganhCreated => responseWithTokens(req, res, chuyenNganhCreated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        ChuyenNganhService.getAll()
            .then(chuyennganhs => responseWithTokens(req, res, chuyennganhs, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        ChuyenNganhService.delete(id)
            .then(chuyenNganh => responseWithTokens(req, res, chuyenNganh, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        ChuyenNganhService.update(id, data)
            .then(khoa => responseWithTokens(req, res, khoa, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new ChuyenNganhController()