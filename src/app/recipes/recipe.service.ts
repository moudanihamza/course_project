
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('a recipe test', 'this is a simply test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com' +
    '/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg',
    [
      new Ingredient('Salmon', 40),
      new Ingredient('Avocado', 15)
    ])
  ];

  recipesChange = new Subject <Recipe[]> ();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChange.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.recipes.slice());
  }
}
