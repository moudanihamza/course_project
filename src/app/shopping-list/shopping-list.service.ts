import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient [] = [
    new Ingredient( 'Apple', 5),
    new Ingredient( 'Tomatoes', 10),
  ];
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
   }

   addIngredients( ingredients: Ingredient[]) {
       this.ingredients.push(...ingredients);
       this.ingredientAdded.next(this.ingredients.slice());
   }
   updateIngedient(index: number, newIngredient: Ingredient) {
     this.ingredients[index] = newIngredient;
     this.ingredientAdded.next(this.ingredients.slice());
   }

   delete(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

}
