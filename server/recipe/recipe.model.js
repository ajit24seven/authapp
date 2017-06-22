const mongoose = require("mongoose");
const config = require("../../config/database");

//Recipe Schema
const RecipeSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    recipeImage:{
        type:String,
        require:true
    },
    recipeDescription:{
        type:String,
        require:true
    },
    recipePreparationTime:{
        type:Number,
        require:true
    }
});

const Recipe = module.exports = mongoose.model("Recipe", RecipeSchema);

/* CREATE RECIPE */
module.exports.addRecipe = function(newRecipe, callback){   
    Recipe.create(newRecipe, callback); 
};

/* ALL RECIPE */
module.exports.getRecipes = function(callback){
    Recipe.find(callback);
};

/* SINGLE UPDATE RECIPE */
module.exports.getRecipe = function(id, callback){
    Recipe.findById(id, callback);
};

/* UPDATE RECIPE */
module.exports.upateRecipe = function(id, newRecipe, callback){
    Recipe.findByIdAndUpdate(id, newRecipe, callback);
};


/* DELETE RECIPE */
module.exports.deleteRecipe = function(id, callback){
    var query = {_id:id}
    Recipe.findByIdAndRemove(id, callback);
};
