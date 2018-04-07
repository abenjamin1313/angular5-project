import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //add this
import { AboutComponent } from './about/about.component'; //add this

const routes: Routes = [
  {
    path: '', //home path
    component: HomeComponent
  },
  {
    path: 'about/:id', //about path
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
