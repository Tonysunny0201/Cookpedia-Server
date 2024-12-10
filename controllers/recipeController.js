const recipes = require('../models/recipeModel')

// get all recipes 
exports.getAllRecipeController= async(req,res)=>{
    console.log("inside getAllRecipeController");
    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    } catch (err) {
        res.status(401).json(err)
    }
}

// getRecipe 
exports.getRecipeController = async (req,res)=>{
    console.log("inside getRecipeController");
    // 
    const {id} = req.params

    try {
        const recipeDetails = await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    } catch (err) {
        res.status(401).json(err)
    }
}

// related recipe 
exports.relatedRecipeController = async (req,res)=>{
    console.log("inside relatedRecipeController");
    const cuisine = req.query.cuisine
    try {
        const allRelatedRecipes = await recipes.find({cuisine})
        res.status(200).json(allRelatedRecipes)
    } catch (err) {
        res.status(401).json(err)
    }
}