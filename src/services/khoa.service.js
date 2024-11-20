'use strict'
const KhoaModel = require('../models/Khoa.model')

class KhoaService {

    create = async (khoa) => {
        const created = await KhoaModel.create(khoa)
        return created
    }

    getAll = async () => {
        const khoas = await KhoaModel.find().lean()
        return khoas
    }

    delete = async (id) => {
        const deleted = await KhoaModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await KhoaModel.findByIdAndUpdate(id, data)
        return updated
    }

    getById = async (id) => {
        const founded = await KhoaModel.findById(id)
        return founded
    }

}

module.exports = new KhoaService()