import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import{Injectable} from '@angular/core';
import{Article} from '../article';
@injectable({
  providedIn:'root'
})
export class ArticlesService{
  private articles: Array<Article> = [
    new Article( idArticle: 1,titreArticle:'IntiFormatin',dateArticle:'12/12/1212',contenueArticle: 'voila voila'),
    new Article( idArticle: 2,titreArticle:'IntiFormatin',dateArticle:'13/12/1212',contenueArticle: 'voila voila'),
    new Article( idArticle: 3,titreArticle:'IntiFormatin',dateArticle:'14/12/1212',contenueArticle: 'voila voila')
  ];
}