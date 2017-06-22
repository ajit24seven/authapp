import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  constructor(
      private recipeService:RecipeService,
      public toastr:ToastsManager,
      vcr:ViewContainerRef,
      private authService:AuthService,
      private router:Router
  ) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  onSubmitNewRecipe(form:NgForm){
    const recipe = form.value;
    const name:String = recipe.name;
    const username:String = recipe.recipe_image;
    const email:String = recipe.recipe_description;
    const password:String = recipe.recipe_preparation_time;

    this.recipeService.addRecipe(recipe).subscribe(data => {
      if(data.success){
        this.toastr.success(data.msg, 'Success!');
        this.router.navigate(['/recipe'])
      }
    });
  }
}
