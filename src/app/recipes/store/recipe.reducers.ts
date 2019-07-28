import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as recipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';


export interface FeatureState extends fromApp.AppState {
    recipe: State;
}
export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('a recipe test', 'this is a simply test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com' +
            '/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg',
            [
                new Ingredient('Salmon', 40),
                new Ingredient('Avocado', 15)
            ])
    ]
};

export function recipeReducer(state = initialState, action: recipeActions.RecipeActions) {

    switch (action.type) {
        case recipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };
        case recipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case recipeActions.UPDATE_RECIPE:
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case recipeActions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: oldRecipes
            };
        default:
            return state;
    }

}