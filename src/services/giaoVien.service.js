'use strict'
const GiaoVienModel = require('../models/GiaoVien.model')
const khoaService = require('./khoa.service')
const authUtils = require('../utils/auth')

class GiaoVienService {

    create = async (gv) => {
        const hashPassword = await authUtils.hashPassword('123456')
        gv.password = hashPassword
        const created = await GiaoVienModel.create(gv)
        return created
    }

    getById = async (id) => {
        const gv = await GiaoVienModel.findById(id).lean()
        console.log(gv)
        const khoa = await khoaService.getById(gv.maKhoa)
        return { ...gv, khoa }
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