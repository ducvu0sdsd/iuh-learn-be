'use strict'
const GiaoVienModel = require('../models/GiaoVien.model')
const khoaService = require('./khoa.service')

class GiaoVienService {

    create = async (gv) => {
        const created = await GiaoVienModel.create(gv)
        return created
    }

    getAll = async () => {
        let giaoViens = await GiaoVienModel.find().lean()
        const khoas = await khoaService.getAll()
        giaoViens = giaoViens.map((item) => {
            const khoa = khoas.filter(item1 => item1._id.toString() === item.maKhoa.toString())[0]
            return { ...item, khoa }
        })
        return giaoViens
    }

    delete = async (id) => {
        const deleted = await GiaoVienModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await GiaoVienModel.findByIdAndUpdate(id, data)
        return updated
    }

}

module.exports = new GiaoVienService()