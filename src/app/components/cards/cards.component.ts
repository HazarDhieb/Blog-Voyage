import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
//  @Input() cards!:Article[];
 /* voyageDeactive:Article[]=ARTICLE;/*le variable elle contient un tab de voyage de type respectant l'interf ARTICLE*/
 article!:Article;
   

 voyageAdecouvrir = ARTICLE.filter((article : Article) => article.isActive === false);
  
}
