'use strict'
const MonHocModel = require('../models/MonHoc.model')
const ChuyenNganhService = require('./chuyenNganh.service')

class MonHocService {

    create = async (monhoc) => {
        const created = await MonHocModel.create(monhoc)
        return created
    }

    getAll = async () => {
        let monhocs = await MonHocModel.find().lean()
        const chuyenNganhs = await ChuyenNganhService.getAll()
        monhocs = monhocs.map(item => {
            const chuyenNganh = chuyenNganhs.filter(item1 => item1._id.toString() === item.maChuyenNganh.toString())[0]
            return {
                ...item,
                chuyenNganh
            }
        })
        return monhocs
    }

    delete = async (id) => {
        const deleted = await MonHocModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await MonHocModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new MonHocService()