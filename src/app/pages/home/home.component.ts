import { Component } from '@angular/core';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
 public cards=ARTICLE;
   article!:Article;
}
