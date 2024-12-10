const saveRecipes = require('../models/saveRecipeModel')

// add to collection
exports.addToSaveRecipeController = async (req,res)=>{
    console.log("inside addToSaveRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image} = req.body
    try{
        const existingRecipe = await saveRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Selected Recipe already in your collection.. please add another!!")
        }else{
            const newRecipe = new saveRecipes({
                recipeId:id,name,image,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// user recipe collection get - authorised user
exports.getUserSavedRecipeController = async(req,res)=>{
    console.log("inside getUserSaveRecipeController");
    // get userId to get user collection
    const userId = req.userId
    try{
        const userRecipeCollection = await saveRecipes.find({userId})
        res.status(200).json(userRecipeCollection)
    }catch(err){
        res.status(401).json(err)
    }
    
}

// remove save recipe - authorised user
exports.removeSavedRecipeController = async(req,res)=>{
    console.log("inside removeSavedRecipeController");
    // 1. get item_id to be removed from req params
    const {id} = req.params
    // 2. remove item from collection using findByIdAndDelete
    try{
        const removeSaveRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeSaveRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}


