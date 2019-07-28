import {  Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<fromRecipe.State>;


  constructor(private store: Store<fromRecipe.FeatureState>, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.store.select('recipes');
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }



}
