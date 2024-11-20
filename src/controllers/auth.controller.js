'use strict'

const authService = require("../services/auth.service");
const ManagementModel = require('../models/Management.model')
const { responseWithNoTokens, responseWithTokens } = require("../utils/response");
const SinhVienModel = require("../models/SinhVien.model");
const StudentService = require('../services/sinhVien.service')
const TeacherService = require('../services/giaoVien.service')

class AuthController {

    signInWithManager = (req, res) => {
        const { username, password } = req.body
        authService.signInWithManager(username, password)
            .then(user => responseWithNoTokens(req, res, user, 200))
            .catch(error => responseWithNoTokens(req, res, error.message, 500))
    }

    signInWithStudent = (req, res) => {
        const { username, password } = req.body
        authService.signInWithStudent(username, password)
            .then(user => responseWithNoTokens(req, res, user, 200))
            .catch(error => responseWithNoTokens(req, res, error.message, 500))
    }

    signInWithTeacher = (req, res) => {
        const { username, password } = req.body
        authService.signInWithTeacher(username, password)
            .then(user => responseWithNoTokens(req, res, user, 200))
            .catch(error => responseWithNoTokens(req, res, error.message, 500))
    }

    findManagerByToken = async (req, res) => {
        const user = await ManagementModel.findById(req.userid)
        return responseWithTokens(req, res, user, 200)
    }

    findUserByToken = async (req, res) => {
        const user = await StudentService.getById(req.userid)
        return responseWithTokens(req, res, user, 200)
    }

    findTeacherByToken = async (req, res) => {
        const user = await TeacherService.getById(req.userid)
        return responseWithTokens(req, res, user, 200)
    }
}

module.exports = new AuthController()