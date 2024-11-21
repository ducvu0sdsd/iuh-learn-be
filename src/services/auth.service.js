'use strict'

const ManagementModel = require('../models/Management.model')
const StudentModel = require('../models/SinhVien.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const StudentService = require('../services/sinhVien.service')
const TeacherModel = require('../models/GiaoVien.model')
const TeacherService = require('../services/giaoVien.service')
const authUtils = require('../utils/auth')

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

    signInWithTeacher = async (username, pass) => {
        const teacherFound = await TeacherModel.findOne({ soDienThoai: username })
        const teacher = await TeacherService.getById(teacherFound._id)
        if (teacher) {
            const isMatch = await bcrypt.compare(pass, teacher.password);
            if (isMatch) {
                return {
                    teacher,
                    tokens: await this.generateTokens({ user_id: teacher._id })
                }
            } else {
                throw new Error(`Số điện thoại giáo viên hoặc mật khẩu không trùng khớp`);
            }
        } else {
            throw new Error('Không tìm thấy giáo viên')
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
    forgotPasswordWithStudent = async (_id, oldPass, newPass) => {
        const studentFound = await StudentModel.findById(_id).lean()
        if (studentFound) {
            const isMatch = await bcrypt.compare(oldPass, studentFound.password);
            if (isMatch) {
                const hashPassword = await authUtils.hashPassword(newPass)
                studentFound.password = hashPassword
                const updated = StudentModel.findByIdAndUpdate(_id, studentFound, { new: true })
                return updated
            } else {
                throw new Error(`Mật khẩu cũ không trùng khớp`);
            }
        }
    }

    forgotPasswordWithTeacher = async (_id, oldPass, newPass) => {
        const teacherFound = await TeacherModel.findById(_id).lean()
        if (teacherFound) {
            const isMatch = await bcrypt.compare(oldPass, teacherFound.password);
            if (isMatch) {
                const hashPassword = await authUtils.hashPassword(newPass)
                teacherFound.password = hashPassword
                const updated = TeacherModel.findByIdAndUpdate(_id, teacherFound, { new: true })
                return updated
            } else {
                throw new Error(`Mật khẩu cũ không trùng khớp`);
            }
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