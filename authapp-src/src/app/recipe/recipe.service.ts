import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService{
    constructor(private http:Http) { }
    
    addRecipe(newRecipe){
        let headers = new Headers();
        headers.append("Content-Type","application/json");
        return this.http.post("http://localhost:3000/recipe/recipe", newRecipe, {headers:headers})
        .map(res => res.json());        
    }
    getRecipes(){
        return this.http.get("http://localhost:3000/recipe/recipe")
        .map(res => res.json());
    }
    
    getRecipe(id){
        return this.http.get("http://localhost:3000/recipe/recipe/"+id)
        .map(res => res.json());
    }

    deleteRecipe(id){
        return this.http.delete("http://localhost:3000/recipe/recipe/"+id)
        .map(res => res.json());
    }
    
    
}