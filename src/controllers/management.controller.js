'use strict'

const ManagementService = require('../services/management.service')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");
class ManagementController {
    create = async (req, res) => {
        const management = req.body
        ManagementService.create(management)
            .then(user => responseWithNoTokens(req, res, user, 200))
            .catch(error => responseWithNoTokens(req, res, error.message, 500))
    }
}

module.exports = new ManagementController()