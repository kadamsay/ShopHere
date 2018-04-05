import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { SportsComponent } from './sports/sports.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }, 
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'healthcare',
    component: HealthcareComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'kid',
    component: KidComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [ 
  HomeComponent, 
  CategoriesComponent, 
  AboutComponent, 
  ElectronicsComponent,
  SportsComponent,
  HealthcareComponent,
  WomenComponent,
  MenComponent,
  KidComponent
]
