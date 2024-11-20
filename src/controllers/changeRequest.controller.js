'use strict'
const ChangeRequestService = require('../services/changeRequest.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");

class ChangeRequestController {

    create = (req, res) => {
        const model = req.body
        ChangeRequestService.create(model)
            .then(created => responseWithTokens(req, res, created, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    getAll = (req, res) => {
        ChangeRequestService.getAll()
            .then(founded => responseWithTokens(req, res, founded, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    delete = (req, res) => {
        const { id } = req.params
        ChangeRequestService.delete(id)
            .then(deleted => responseWithTokens(req, res, deleted, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

    update = (req, res) => {
        const { id } = req.params
        const data = req.body
        ChangeRequestService.update(id, data)
            .then(updated => responseWithTokens(req, res, updated, 200))
            .catch(error => responseWithTokens(req, res, error.message, 500))
    }

}

module.exports = new ChangeRequestController()