import { Category, Link } from './category';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[];
  callbacks: ((full: boolean) => void)[];

  constructor() {
    this.categories = [
      new Category(' work ', [
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube"),
        new Link("https://www.youtube.com", "YouTube")
      ]),
      new Category(' work ', [new Link("https://www.youtube.com", "YouTube")]),
      new Category(' work ', [new Link("https://www.youtube.com", "YouTube")])
    ];

    this.callbacks = [];
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  addCategory(category: Category) {
    this.categories.push(category);
    this.pushOutCallbacks();
  }

  removeCategory(category: Category) {
    for( var i = 0; i < this.categories.length; i++ ) {
      if ( this.categories[i] === category ) {
        this.categories.splice(i, 1);
        i--;
      }
    }

    this.pushOutCallbacks();
  }

  signIntoFullChangeCallback(callback: (full: boolean) => void) {
    this.callbacks.push(callback);
  }

  pushOutCallbacks() {
    this.callbacks.forEach(callback => {
      callback(this.categories.length === 8);
    })
  }
}
