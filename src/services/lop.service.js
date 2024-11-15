'use strict'
const LopModel = require('../models/Lop.model')
const ChuyenNganhService = require('../services/chuyenNganh.service')
const HeDaoTaoService = require('../services/heDaoTao.service')

class LopService {

    create = async (lop) => {
        const created = await LopModel.create(lop)
        return created
    }

    getAll = async () => {
        let lops = await LopModel.find().lean()
        const chuyenNganhs = await ChuyenNganhService.getAll()
        const heDaoTaos = await HeDaoTaoService.getAll()
        lops = lops.map(item => {
            const chuyenNganh = chuyenNganhs.filter(item1 => item1._id.toString() === item.maChuyenNganh.toString())[0]
            const heDaoTao = heDaoTaos.filter(item1 => item1._id.toString() === item.maHeDaoTao.toString())[0]
            return {
                ...item,
                chuyenNganh, heDaoTao
            }
        })
        return lops
    }

    delete = async (id) => {
        const deleted = await LopModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await LopModel.findByIdAndUpdate(id, data)
        return updated
    }

    getById = async (id) => {
        let lop = await LopModel.findById(id).lean()
        const chuyenNganhs = await ChuyenNganhService.getAll()
        const heDaoTaos = await HeDaoTaoService.getAll()
        const chuyenNganh = chuyenNganhs.filter(item1 => item1._id.toString() === lop.maChuyenNganh.toString())[0]
        const heDaoTao = heDaoTaos.filter(item1 => item1._id.toString() === lop.maHeDaoTao.toString())[0]
        return {
            ...lop,
            chuyenNganh, heDaoTao
        }
    }
}

module.exports = new LopService()