import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ToTravelMoreComponent } from './components/to-travel-more/to-travel-more.component';
import { ReviewComponent } from './components/review/review.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CardVoyageComponent } from './components/card-voyage/card-voyage.component';
import { CardsComponent } from './components/cards/cards.component';
import { ButtonScrollComponent } from './components/button-scroll/button-scroll.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ToTravelMoreComponent,
    ReviewComponent,
    HomeComponent,
    ArticlesComponent,
    CardVoyageComponent,
    CardsComponent,
    ButtonScrollComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
