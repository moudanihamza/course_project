import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('myForm', { static: true }) myForm: NgForm;
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.myForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addIngredient() {
    const name: string = this.myForm.value.name;
    const amount: number = this.myForm.value.amount;
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.editMode ? this.shoppingListService.updateIngedient(this.editedIndex, ingredient) :
      this.shoppingListService.addIngredient(ingredient);
    this.editMode = false;
    this.myForm.reset();
  }
  onClear() {
    this.editMode = false;
    this.myForm.reset();
  }
  onDelete() {
    this.shoppingListService.delete(this.editedIndex);
    this.editMode = false;
    this.myForm.reset();
  }
}
