import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-card-voyage',
  templateUrl: './card-voyage.component.html',
  styleUrls: ['./card-voyage.component.css']
})
export class CardVoyageComponent {
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { }
  ngOnInit() {
    this.getArticle();
    console.log(this.article);
  }
  articles: Article[] = ARTICLE;
  article!: Article;

  getArticle() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    const foundArticle  = this.articles.find((article) => article.id === id);
    console.log('foundArticle',foundArticle);
    if (foundArticle) {
      this.article = foundArticle;
    }
    else {
      this.router.navigate(['/not-found']);
    }

  }

}
