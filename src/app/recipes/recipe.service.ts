import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('a recipe test', 'this is a simply test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com' +
    '/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg',
    [
      new Ingredient('Salmon', 40),
      new Ingredient('Avocado', 15)
    ])
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
