import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //add this
import { AboutComponent } from './about/about.component'; //add this
import { CarouselComponent } from './carousel/carousel.component'; 

const routes: Routes = [
  {
    path: '', //home path
    component: HomeComponent
  },
  {
    path: 'about/:id', //about path
    component: AboutComponent
  },
  {
    path: 'carousel', //carousel path
    component: CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
