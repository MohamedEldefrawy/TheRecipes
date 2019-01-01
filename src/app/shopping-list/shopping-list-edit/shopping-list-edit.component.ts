import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../..//shopping-list/shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  // Refrence of the form
  @ViewChild('shoppingListForm') formRefrence: NgForm;

  selectedIndexsubscribtion: Subscription;
  // editedIngredientSubscribtion:Subscription;

  editedItemIndex: number;
  editMode = false;

  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.selectedIndexsubscribtion = this.shoppingListService.selectedIndexChanged.subscribe(((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedIngredient = this.shoppingListService.getIngredientbyID(this.editedItemIndex);

      this.formRefrence.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      })
    }));



  }

  onSubmit() {
    if (!this.editMode) {
      this.shoppingListService.setingredient({ name: this.formRefrence.controls.name.value, amount: this.formRefrence.controls.amount.value })
      this.formRefrence.reset();
    }
    else {
      this.shoppingListService.updateIngredient(this.editedItemIndex,
        ({ name: this.formRefrence.controls.name.value, amount: this.formRefrence.controls.amount.value }));
      this.editMode = false;
      this.formRefrence.reset();
    }
  }

  // Delete the selected Ingredient
  onDelete() {
    // this.shoppingListService.deleteIngredient(this.shoppingListService.selectedIngredientIndex);
    // this.shoppingListService.selectedIngredientIndex = null;

    this.shoppingListService.deleteIngredient(this.editedItemIndex);

  }


  // Clear the UI
  onClear() {
    this.formRefrence.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.selectedIndexsubscribtion.unsubscribe();

  }

}
