import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.recipes = this.recipeService.getRecipes();
   }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChange.subscribe(
      (recipes: Recipe []) => this.recipes = recipes
    );
  }
  onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.activatedRoute} );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
