import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../shared/shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {

  // Refrence of the form
  @ViewChild('shoppingListForm') formRefrence: NgForm;

  subscribe: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.shoppingListService.setingredient({ name: this.formRefrence.controls.name.value, amount: this.formRefrence.controls.amount.value })
    this.formRefrence.reset();
  }

  // Delete the selected Ingredient
  onDelete() {
    this.shoppingListService.deleteIngredient(this.shoppingListService.selectedIngredientIndex);
    this.shoppingListService.selectedIngredientIndex = null;
  }

  // Clear the UI
  onClear() {
    this.formRefrence.reset();
  }

}
