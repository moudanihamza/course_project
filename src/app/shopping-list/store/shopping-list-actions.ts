import { Ingredient } from '../../shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export const ADD_INGREDIENTS = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type: string = ADD_INGREDIENT;
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type: string = ADD_INGREDIENTS;

    constructor(public payload: Ingredient []) {
    }
}

export type ShoppingListActions = AddIngredient | AddIngredients ;
