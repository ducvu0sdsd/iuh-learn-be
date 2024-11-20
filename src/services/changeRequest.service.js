'use strict'
const ChangeRequestModel = require('../models/ChangeRequest.model')

class ChangeRequestService {

    create = async (model) => {
        const created = await ChangeRequestModel.create(model)
        return created
    }

    getAll = async () => {
        let foundeds = await ChangeRequestModel.find().lean()
        return foundeds
    }

    delete = async (id) => {
        const deleted = await ChangeRequestModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await ChangeRequestModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new ChangeRequestService()