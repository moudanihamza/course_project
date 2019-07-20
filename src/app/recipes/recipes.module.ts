import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StartRecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class RecipesModule { }
