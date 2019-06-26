import { Component } from '@angular/core';
import { Article } from './../model/article.model';
import { l } from '@angular/core/src/render3';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent {
  title = 'Angular 2 Simple Reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    this.flushFormValue(title, link);
    return false;
  }

  sortArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  private flushFormValue(title: HTMLInputElement, link: HTMLInputElement): void {
    title.value = '';
    link.value = '';
  }
}
