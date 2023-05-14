import { Component } from '@angular/core';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 /* voyageDeactive:Article[]=ARTICLE;/*le variable elle contient un tab de voyage de type respectant l'interf ARTICLE*/
   article!:Article;
   

   voyageAdecouvrir = ARTICLE.filter((article : Article) => article.isActive === false);

}
