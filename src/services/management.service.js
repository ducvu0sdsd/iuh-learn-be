'use strict'
const ManagementModel = require('../models/Management.model')
const authUtils = require("../utils/auth")

class ManagementService {

    create = async (management) => {
        const passwordEncode = await authUtils.hashPassword(management.password)
        management.password = passwordEncode
        const created = await ManagementModel.create(management)
        return created
    }
}

module.exports = new ManagementService()