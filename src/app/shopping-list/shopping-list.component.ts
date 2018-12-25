import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shared/shoppingList.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  subscribtion: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscribtion = this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  //Get the selected ingredient index and assign it to the service
  onIngredientClick(ingredient: Ingredient) {
    this.shoppingListService.selectedIngredientIndex = this.ingredients.indexOf(ingredient);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
