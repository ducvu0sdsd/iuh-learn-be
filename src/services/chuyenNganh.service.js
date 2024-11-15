'use strict'
const ChuyenNganhModel = require('../models/ChuyenNganh.model')
const KhoaService = require('../services/khoa.service')

class ChuyenNganhService {

    create = async (chuyenNganh) => {
        const created = await ChuyenNganhModel.create(chuyenNganh)
        return created
    }

    getAll = async () => {
        let chuyenNganhs = await ChuyenNganhModel.find().lean()
        const khoas = await KhoaService.getAll()
        chuyenNganhs = chuyenNganhs.map(item => ({ ...item, khoa: khoas.filter(item1 => item1._id.toString() === item.maKhoa.toString())[0] }))
        return chuyenNganhs
    }

    delete = async (id) => {
        const deleted = await ChuyenNganhModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await ChuyenNganhModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new ChuyenNganhService()