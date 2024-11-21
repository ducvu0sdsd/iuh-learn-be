'use strict'

const express = require('express')

const middleware = require('../../controllers/middleware')
const authController = require('../../controllers/auth.controller')
const router = express.Router()

router.post('/find-manager-by-token', middleware.checkToken, authController.findManagerByToken)
router.post('/find-user-by-token', middleware.checkToken, authController.findUserByToken)
router.post('/find-teacher-by-token', middleware.checkToken, authController.findTeacherByToken)
router.post('/update-password-with-student', middleware.checkToken, authController.forgotPasswordWithStudent)
router.post('/update-password-with-teacher', middleware.checkToken, authController.forgotPasswordWithTeacher)
router.post('/sign-in-with-manager', authController.signInWithManager)
router.post('/sign-in-with-student', authController.signInWithStudent)
router.post('/sign-in-with-teacher', authController.signInWithTeacher)

module.exports = router  