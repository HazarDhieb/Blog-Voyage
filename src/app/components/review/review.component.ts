import { Component ,Input} from '@angular/core';
import { Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
// article!:Article;
@Input() positif! : string[];
@Input() negatif! : string[];
@Input() advice! : string[];

}
