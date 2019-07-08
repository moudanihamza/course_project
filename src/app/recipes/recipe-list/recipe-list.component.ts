import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe [] = [
    new Recipe('a recipe test', 'this is a simply test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com' +
    '/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe( recipe ) {
    this.selectedRecipe.emit(recipe);
    }

}
