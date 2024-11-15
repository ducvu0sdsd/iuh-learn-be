'use strict'
const SinhVienModel = require('../models/SinhVien.model')
const randomMSSV = require('../utils/mssv')
const lopService = require('./lop.service')
const authUtils = require('../utils/auth')

class SinhVienService {

    create = async (gv) => {
        try {
            let mssv = ''
            while (mssv === '') {
                const mssvCreated = randomMSSV(new Date().getFullYear())
                const founded = await this.getByMssv(mssvCreated)
                if (!founded)
                    mssv = mssvCreated + ''
            }
            gv.mssv = mssv
            const hashPassword = await authUtils.hashPassword('123456')
            gv.password = hashPassword
            const created = await SinhVienModel.create(gv)
            return created
        } catch (error) {
            console.log(error)
        }
    }

    getByMssv = async (mssv) => {
        const founded = await SinhVienModel.findOne({ mssv })
        return founded
    }

    getAll = async () => {
        let sinhViens = await SinhVienModel.find().lean()
        const lops = await lopService.getAll()
        sinhViens = sinhViens.map((item) => {
            const lop = lops.filter(item1 => item1._id.toString() === item.maLop.toString())[0]
            return { ...item, lop }
        })
        return sinhViens
    }

    delete = async (id) => {
        const deleted = await SinhVienModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await SinhVienModel.findByIdAndUpdate(id, data)
        return updated
    }

    getById = async (id) => {
        const sv = await SinhVienModel.findById(id).lean()
        const lop = await lopService.getById(sv.maLop)
        return { ...sv, lop }
    }

}

module.exports = new SinhVienService()