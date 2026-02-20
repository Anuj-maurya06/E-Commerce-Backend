import express from 'express'
import {
  registerController, 
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController
 } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
const router = express.Router()

//register router \\ post
router.post('/register',registerController)

//login \\post
router.post('/login', loginController )

//frogot password
router.post("/forgot-password", forgotPasswordController)

//test router
router.get('/test',requireSignIn , isAdmin , testController)

// protected user  route
router.get('/user-auth', requireSignIn ,(req,res)=>{
  res.status(200).send({ok:true});
})

//protected admin route
router.get('/admin-auth', requireSignIn ,isAdmin,(req,res)=>{
  res.status(200).send({ok:true});
})

//update profile
router.put('/profile',requireSignIn, updateProfileController)


export default router;
 
  // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTgxNzY3NmZiNDY0MTk1ZGU3OGY5NmMiLCJpYXQiOjE3NzAxNzU4ODQsImV4cCI6MTc3MDc4MDY4NH0.xCfEEwjgFVTXMMyb7nK0GPBx_P5T9PMSXVLQkebNM8c"


 // admin  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTgxOGMyY2Y0Mjc5M2E3YWRlNjQwNTIiLCJpYXQiOjE3NzAxNzYyMDIsImV4cCI6MTc3MDc4MTAwMn0.zhCipuUuhuiFP59gZx7zVd3UpFdxX68d4xg3wqcOkhE"
