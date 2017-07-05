import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './gaurd/auth-guard.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftnavComponent } from './layout/leftnav/leftnav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './recipe/recipe.service';
import { HomeComponent } from './home/home.component';
import { RecipeItemsComponent } from './recipe/recipe-items/recipe-items.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    RecipeComponent,
    HomeComponent,
    RecipeItemsComponent,
    RecipeDetailsComponent,
    RecipeNewComponent,
    RecipeEditComponent,
    FileSelectDirective,
    FileUploadComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
