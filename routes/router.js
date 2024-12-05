const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')

const router = new express.Router()

// all recipes
router.get("/all-recipes",recipeController.getAllRecipeController)

// add testimony
router.post("/add-testimony",testimonyController.addTestimonyController)

// add user  : register
router.post("/register",userController.addUserController)

// login
router.post("/login",userController.loginController)

module.exports = router

