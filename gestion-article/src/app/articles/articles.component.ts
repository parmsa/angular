import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

articles: Article[]=new Array<Article>()

getArticle(){
  this.articles.push(new Article(1,"reconfinement",new Date(),"voila voila" ))
  this.articles.push(new Article(2,"reconfinement",new Date(),"voila voila" ))

  return this.articles;
}

  constructor() { }

  ngOnInit(): void {
  }

}
