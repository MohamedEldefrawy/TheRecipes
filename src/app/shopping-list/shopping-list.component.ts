import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor() {
   }

  ngOnInit() {
  }

  onShoppingListSaved(ShoppingListData:{componentName:string,componentAmount:number})
  {
    this.ingredients.push(new Ingredient(ShoppingListData.componentName,ShoppingListData.componentAmount));
  }

}
