const express = require("express");
const router = express.Router();
const config = require("../../config/database");

//User Model
const Recipe = require("../../server/recipe/recipe.model");

router.post("/recipe", (req, res, next)=>{
    
    let newRecipe = new Recipe({
        name:req.body.name,
        recipeImage:req.body.recipeImage,
        recipeDescription:req.body.recipeDescription,
        recipePreparationTime:req.body.recipePreparationTime
    });


    Recipe.addRecipe(newRecipe, (err, recipe)=>{
        if(err){
            res.json({success:false, msg:"Faild to register user"});
        }else{
            res.json({success:true, msg:"User Registered"});
        }
    });
    
});

router.get("/recipe", (req, res, next)=>{
     Recipe.getRecipes((err, recipe)=>{
        if(err){
            res.json({success:false, msg:"Faild to register user"});
        }else{
            res.json({recipe, success:true, msg:"User Registered"});
        }
    })
});

router.get("/recipe/:id", (req, res, next)=>{
    let id = req.params.id;
     Recipe.getRecipe(id, (err, recipe)=>{
        if(err){
            res.json({success:false, msg:"Faild to register user"});
        }else{
            res.json({recipe, success:true, msg:"User Registered"});
        }
    })
});

router.delete("/recipe/:id", (req, res, next)=>{
    let id = req.params.id;
    
     Recipe.deleteRecipe(id, (err, recipe)=>{
        if(err){
            res.json({success:false, msg:"Faild to register user"});
        }else{
            res.json({recipe, success:true, msg:"User Registered"});
        }
    })
});


module.exports = router; 