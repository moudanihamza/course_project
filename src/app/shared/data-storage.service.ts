import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-8316e.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {

    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-8316e.firebaseio.com/recipes.json?auth=' + token)
      .pipe(
        map(response => {
          const recipes = (response as Recipe[]);
          for (const recipe of recipes) {
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