import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './gaurd/auth-guard.service';

const appRoutes:Routes = [
    { path : "", redirectTo:"/home", pathMatch:"full"},
    { path : "home", component: HomeComponent},
    { path : "register", component: RegisterComponent},
    { path : "login", component: LoginComponent},
    { path : "dashboard", component: DashboardComponent, canActivate:[AuthGuardService]},
    { path : "profile", component:ProfileComponent, canActivate:[AuthGuardService]},
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule],
    providers: [AuthGuardService],
})

export class AppRoutingModule{

}