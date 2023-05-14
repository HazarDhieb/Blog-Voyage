import { Component, Input } from '@angular/core';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-to-travel-more',
  templateUrl: './to-travel-more.component.html',
  styleUrls: ['./to-travel-more.component.css']
})
export class ToTravelMoreComponent {
  article!: Article;
   toTravel = ARTICLE.filter((article : Article) => article.secondaryPicture);

}
