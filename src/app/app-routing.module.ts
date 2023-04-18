import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"articles",
    component: ArticlesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
