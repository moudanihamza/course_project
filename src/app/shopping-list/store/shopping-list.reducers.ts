import * as  shoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface AppState {
    shoppingList: State
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
export function shoppingListReducer(state = initialState, action: shoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case shoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case shoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...<Ingredient[]>action.payload]
            };
        case shoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = { ...ingredient, ...<Ingredient>action.payload };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case shoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = state.ingredients;
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredient: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case shoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload] };
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        case shoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        default:
            return state;
    }
}
