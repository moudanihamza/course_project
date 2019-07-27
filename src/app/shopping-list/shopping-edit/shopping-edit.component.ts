import * as ShoppingListActions from '../store/shopping-list.actions';
import { Subscription } from 'rxjs';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/shopping-list.reducers';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editMode = true;
          this.editedIndex = data.editedIngredientIndex;
          this.myForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit())
    this.subscription.unsubscribe();
  }

  addIngredient() {
    const name: string = this.myForm.value.name;
    const amount: number = this.myForm.value.amount;
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.editMode ? this.store.dispatch(
      new ShoppingListActions.UpdateIngredient( ingredient )
    ) :
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    this.editMode = false;
    this.myForm.reset();
  }
  onClear() {
    this.editMode = false;
    this.myForm.reset();
  }
  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.editMode = false;
    this.myForm.reset();
  }
}
