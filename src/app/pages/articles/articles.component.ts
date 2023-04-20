import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE, Article } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {


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
  // dateBG=this.article.dateBegin.toLocaleDateString(undefined, { timeZone: 'UTC' });

 }
