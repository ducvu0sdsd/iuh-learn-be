'use strict'
const HeDaoTaoService = require('../services/heDaoTao.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class HeDaoTaoController {

    create = (req, res) => {
        const heDaoTao = req.body
        HeDaoTaoService.create(heDaoTao)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        HeDaoTaoService.getAll()
            .then(hedaotaos => responseWithTokens(req, res, hedaotaos, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        HeDaoTaoService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        HeDaoTaoService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new HeDaoTaoController()