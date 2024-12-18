'use strict'
const HocPhanModel = require('../models/HocPhan.model')
const MonHocService = require('./monHoc.service')
const GiaoVienService = require('./giaoVien.service')
const LopService = require('./lop.service')
const HocKyService = require('./hocKy.service')
const PhongService = require('./phong.service')
const randomMaHocPhan = require('../utils/mahocphan')

class HocPhanService {

    create = async (hocphan) => {
        try {
            const maHocPhan = randomMaHocPhan()
            const created = await HocPhanModel.create({ ...hocphan, maHocPhan })
            return created
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async () => {
        let hocPhans = await HocPhanModel.find().lean()
        const monhocs = await MonHocService.getAll()
        const lops = await LopService.getAll()
        const hockys = await HocKyService.getAll()
        hocPhans = hocPhans.map(item => {
            const monHoc = monhocs.filter(item1 => item1._id.toString() === item.monHoc.maMon.toString())[0]
            const lop = lops.filter(item1 => item1._id.toString() === item.lop.maLop.toString())[0]
            const hocKy = hockys.filter(item1 => item1._id.toString() === item.hocKy.maHocKy.toString())[0]
            return {
                ...item,
                monHoc: { ...item.monHoc, ...monHoc },
                lop: { ...item.lop, ...lop },
                hocKy: { ...item.hocKy, ...hocKy }
            }
        })
        return hocPhans
    }

    delete = async (id) => {
        const deleted = await HocPhanModel.findByIdAndDelete(id)
        return deleted
    }

    update = async (id, data) => {
        const updated = await HocPhanModel.findByIdAndUpdate(id, data, { new: true })
        return updated
    }
    getByHocKy = async (maHocKy) => {
        try {
            let hocPhans = await HocPhanModel.find({ 'hocKy.maHocKy': maHocKy }).lean()
            const monhocs = await MonHocService.getAll()
            const lops = await LopService.getAll()
            const hockys = await HocKyService.getAll()
            hocPhans = hocPhans.map(item => {
                const monHoc = monhocs.filter(item1 => item1._id.toString() === item.monHoc.maMon.toString())[0]
                const lop = lops.filter(item1 => item1._id.toString() === item.lop.maLop.toString())[0]
                const hocKy = hockys.filter(item1 => item1._id.toString() === item.hocKy.maHocKy.toString())[0]
                return {
                    ...item,
                    monHoc: { ...item.monHoc, ...monHoc },
                    lop: { ...item.lop, ...lop },
                    hocKy: { ...item.hocKy, ...hocKy }
                }
            })
            return hocPhans
        } catch (error) {
            console.log(error)
        }
    }

    getByHocKyAndChuyenNganh = async (maHocKy, maChuyenNganh) => {
        try {
            let hocPhans = await HocPhanModel.find({ 'hocKy.maHocKy': maHocKy }).lean()
            const monhocs = await MonHocService.getAll()
            const lops = await LopService.getAll()
            const hockys = await HocKyService.getAll()
            hocPhans = hocPhans.map(item => {
                const monHoc = monhocs.filter(item1 => item1._id.toString() === item.monHoc.maMon.toString())[0]
                const lop = lops.filter(item1 => item1._id.toString() === item.lop.maLop.toString())[0]
                const hocKy = hockys.filter(item1 => item1._id.toString() === item.hocKy.maHocKy.toString())[0]
                return {
                    ...item,
                    monHoc: { ...item.monHoc, ...monHoc },
                    lop: { ...item.lop, ...lop },
                    hocKy: { ...item.hocKy, ...hocKy }
                }
            })
            hocPhans = hocPhans.filter(item => {
                return item.monHoc.chuyenNganh._id.toString() === maChuyenNganh.toString()
            })
            return hocPhans
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new HocPhanService()