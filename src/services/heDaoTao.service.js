'use strict'
const HeDaoTaoModel = require('../models/HeDaoTao.model')
const chuyenNganhService = require('./chuyenNganh.service')

class HeDaoTaoService {

    create = async (heDaoTao) => {
        const created = await HeDaoTaoModel.create(heDaoTao)
        return created
    }

    getAll = async () => {
        const heDaoTaos = await HeDaoTaoModel.find().lean()
        return heDaoTaos
    }

    delete = async (id) => {
        const deleted = await HeDaoTaoModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await HeDaoTaoModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new HeDaoTaoService()