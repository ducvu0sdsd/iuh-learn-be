'use strict'
const PhongModel = require('../models/Phong.model')
class PhongService {

    create = async (lop) => {
        const created = await PhongModel.create(lop)
        return created
    }

    getAll = async () => {
        let lops = await PhongModel.find().lean()
        return lops
    }

    delete = async (id) => {
        const deleted = await PhongModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await PhongModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new PhongService()