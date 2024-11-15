'use strict'

const ManagementModel = require('../models/Management.model')
const StudentModel = require('../models/SinhVien.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const StudentService = require('../services/sinhVien.service')

class AuthService {

    signInWithManager = async (username, pass) => {
        try {
            const management = await ManagementModel.findOne({ username })
            const isMatch = await bcrypt.compare(pass, management.password);
            if (isMatch) {
                return {
                    management,
                    tokens: await this.generateTokens({ user_id: management._id })
                }
            } else {
                throw new Error(`Tài khoản hoặc mật khẩu không trùng khớp`);
            }
        } catch (error) {
            throw new Error('Không tìm thấy tài khoản');
        }
    }

    signInWithStudent = async (username, pass) => {
        const studentFound = await StudentModel.findOne({ mssv: username })
        const student = await StudentService.getById(studentFound._id)
        if (student) {
            const isMatch = await bcrypt.compare(pass, student.password);
            if (isMatch) {
                return {
                    student,
                    tokens: await this.generateTokens({ user_id: student._id })
                }
            } else {
                throw new Error(`Mã số sinh viên hoặc mật khẩu không trùng khớp`);
            }
        } else {
            throw new Error('Không tìm thấy sinh viên')
        }
    }

    generateTokens = async (user, expire) => {
        const accessToken = jwt.sign(user, process.env.SECRETKEY, { expiresIn: process.env.ACCESSEXPIRES });
        const refreshToken = jwt.sign(user, process.env.SECRETKEY, { expiresIn: expire ? expire : process.env.REFRESHEXPIRES });
        return {
            accessToken,
            refreshToken
        }
    }
}

module.exports = new AuthService()