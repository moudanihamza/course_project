import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { FeatureState } from './recipe.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {

    @Effect()
    private recipeFetch = this.actions$
        .pipe(
            ofType(RecipeActions.FETCH_RECIPES),
            switchMap(
                (action: RecipeActions.FetchRecipes) => {
                    return this.http.get<Recipe[]>('https://ng-recipe-book-8316e.firebaseio.com/recipes.json', {
                        observe: 'body'
                    });
                }),
            map(
                recipes => {
                    for (const recipe of recipes) {
                        if (!recipe.ingredients) {
                            recipe.ingredients = [];
                        }
                    }
                    console.log(recipes);
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes
                    };
                })

        );

    @Effect({ dispatch: false })
    storeRecipe = this.actions$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(
            ([action, state]) => {
                const req = new HttpRequest(
                    'PUT',
                    'https://ng-recipe-book-8316e.firebaseio.com/recipes.json',
                    state.recipes,
                    {
                        reportProgress: true
                    }
                );
                return this.http.request(req);
            }
        )
    )

    constructor(private actions$: Actions, private http: HttpClient, private store: Store<FeatureState>) { }
}