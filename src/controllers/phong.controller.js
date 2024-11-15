'use strict'
const PhongService = require('../services/phong.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class PhongController {

    create = (req, res) => {
        const hocky = req.body
        PhongService.create(hocky)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        PhongService.getAll()
            .then(phongs => responseWithTokens(req, res, phongs, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        PhongService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        PhongService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new PhongController()