import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName', {static: false}) ingredientName: ElementRef;
  @ViewChild('ingredientAmount', {static: false}) ingredientAmount: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {
    const name: string = this.ingredientName.nativeElement.value;
    const amount: number = this.ingredientAmount.nativeElement.value;
    const ingredient: Ingredient = new Ingredient( name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
