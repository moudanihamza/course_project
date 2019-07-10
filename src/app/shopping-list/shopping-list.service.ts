import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient [] = [
    new Ingredient( 'Apple', 5),
    new Ingredient( 'Tomatoes', 10),
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients);
   }

   addIngredients( ingredients: Ingredient[]) {
       this.ingredients.push(...ingredients);
   }

}
