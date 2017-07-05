import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes:any;
id
  constructor(
      private authService:AuthService,
      private recipeService:RecipeService,
      private router:Router,
      private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
      this.recipeService.getRecipe(this.id).subscribe(data => {
          this.recipes = data.recipe;
      },
      err => {
          console.log(err);
          return false;
      }
    )
  };

  deleteRecipeItem(id){
    
     

    this.recipeService.deleteRecipe(id).subscribe(data => {
    this.router.navigate(['/recipe']);
     this.recipes.forEach(function(element, index, array){
        if(array[index]._id==id){
              array.splice(index,1);
        }
      });
    },
      err => {
          console.log(err);
          return false;
      });

      
  }
 

}
