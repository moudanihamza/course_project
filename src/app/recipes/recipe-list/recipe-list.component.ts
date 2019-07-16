import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe [];

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.recipes = this.recipeService.getRecipes();
   }

  ngOnInit() {
  }
  onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.activatedRoute} );
  }

}
