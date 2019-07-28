import { Params } from '@angular/router';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-8316e.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      }
       );
    return this.http.request(req);
  }

  getRecipes() {
    this.http.get<Recipe[]>('https://ng-recipe-book-8316e.firebaseio.com/recipes.json', {
      observe: 'body'
    })
      .pipe(
        map(recipes => {
          for ( const recipe of recipes ) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          console.log(recipes);
          return recipes;
        }))
      .subscribe((response: Recipe[]) => this.recipeService.setRecipes(response));
  }
}
