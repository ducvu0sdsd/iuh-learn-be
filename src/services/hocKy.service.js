'use strict'
const HocKyModel = require('../models/HocKy.model')

class HocKyService {

    create = async (hocky) => {
        const created = await HocKyModel.create(hocky)
        return created
    }

    getAll = async () => {
        let hockys = await HocKyModel.find().lean()
        return hockys
    }

    delete = async (id) => {
        const deleted = await HocKyModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await HocKyModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new HocKyService()