import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreatearticleComponent } from './components/createarticle/createarticle.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home" ,canActivate:[authGuard],component:HomeComponent, title : "Home"},
  {path:"article/:id" ,canActivate:[authGuard],component:DetailComponent , title : "Article"},
  {path:"create",canActivate:[authGuard],component:CreatearticleComponent, title : "Create"},
  {path:"about" ,canActivate:[authGuard], component:AboutComponent, title:"About"},
  {path:"privacy" ,canActivate:[authGuard], component:PrivacyComponent , title:"Privacy"},
  {path:"author/:id" ,canActivate:[authGuard] ,component:AuthorComponent, title:"Author"},
  {path:"login",component:LoginComponent, title:"Login"},
  {path:"register",component:RegisterComponent, title:"Register"},
  {path:"**",component:NotfoundComponent , title:"Notfound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
