import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromRecipe from '../store/recipe.reducers';
import * as fromRecipeActions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Observable<fromRecipe.State>;
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this.store.select('recipes');
      }
    );
  }

  onAddToShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe(
      (recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients
        ));
      }
    )
    this.router.navigate(['/shoppingList']);
  }
  onDelete() {
    this.store.dispatch(new fromRecipeActions.DeleteRecipe(this.id) );
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
