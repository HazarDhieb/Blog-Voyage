import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { CardsComponent } from './components/cards/cards.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  
  {
    path:'404',
    component: NotFoundComponent
  },
  {
    path:'article/:id',
    component: ArticlesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
