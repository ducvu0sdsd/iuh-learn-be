'use strict'

const express = require('express')
const router = express.Router()

router.use('/api/v1/auth', require('./auth'))
router.use('/api/v1/management', require('./management'))
router.use('/api/v1/khoa', require('./khoa')) // http://localhost:8080/api/v1/khoa/create
router.use('/api/v1/chuyennganh', require('./chuyen-nganh'))
router.use('/api/v1/hedaotao', require('./hedaotao'))
router.use('/api/v1/lop', require('./lop'))
router.use('/api/v1/giaovien', require('./giaovien'))
router.use('/api/v1/monhoc', require('./monhoc'))
router.use('/api/v1/hocky', require('./hocky'))
router.use('/api/v1/sinhvien', require('./sinhvien'))
router.use('/api/v1/phong', require('./phong'))
router.use('/api/v1/hocphan', require('./hocphan'))
router.use('/api/v1/change-request', require('./change-request'))
module.exports = router