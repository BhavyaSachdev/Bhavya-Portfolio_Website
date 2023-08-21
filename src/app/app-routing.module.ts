import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path:'' ,component:LandingPageComponent},
  {path:'home' ,component:HomeComponent},
  {path:'aboutMe' ,component:AboutComponent},
  {path:'contactMe' ,component:ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
