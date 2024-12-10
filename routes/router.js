const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadRecipeController = require('../controllers/downloadRecipeController')
const saveRecipeController = require('../controllers/saveRecipeController')

const router = new express.Router()

// all recipes
router.get("/all-recipes",recipeController.getAllRecipeController)

// add testimony
router.post("/add-testimony",testimonyController.addTestimonyController)

// add user  : register
router.post("/register",userController.addUserController)

// login
router.post("/login",userController.loginController)

// view single recipe
router.get("/recipe/:id/view",jwtMiddleware,recipeController.getRecipeController)

// related recipes
router.get("/related-recipes",jwtMiddleware,recipeController.relatedRecipeController)

//  download recipe
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

//  save recipe
router.post("/recipe/:id/save",jwtMiddleware,saveRecipeController.addToSaveRecipeController)

//  get user save recipe
router.get("/get-save-recipes",jwtMiddleware,saveRecipeController.getUserSavedRecipeController)

//  get user save recipe
router.delete("/save-recipes/:id/remove",jwtMiddleware,saveRecipeController.removeSavedRecipeController)

//  get user download recipe
router.get("/user-downloads",jwtMiddleware,downloadRecipeController.getUserDownloadListController)

//  edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)


module.exports = router

