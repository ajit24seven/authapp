import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css'],
  
})
export class RecipeNewComponent implements OnInit {
  filePaths = "";
  public uploader:FileUploader = new FileUploader({
    url:'http://localhost:3000/upload/upload', 
    itemAlias: 'photo'
  });

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
      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            let getFileDetails = JSON.parse(response); 
            this.filePaths = getFileDetails.fileObj.path;
            //this.uploader.clearQueue()
        };
        
  }


  onSubmitNewRecipe(form:NgForm){
    const recipe = form.value;
    const recipelist = {
      name: recipe.name,
      recipeImage:this.filePaths,
      recipeDescription:recipe.recipeDescription,
      recipePreparationTime:recipe.recipePreparationTime
    }
    this.recipeService.addRecipe(recipelist).subscribe(data => {
      if(data.success){
        this.toastr.success(data.msg, 'Success!');
        this.router.navigate(['/recipe'])
      }
    });
  }
}
