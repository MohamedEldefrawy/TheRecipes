import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../../shared/shoppingList.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ComponentNameInput') componentName;
  @ViewChild('ComponentAmountInput') componentAmount;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.shoppingListService.setingredient({ name: this.componentName.nativeElement.value, amount: this.componentAmount.nativeElement.value });
  }


}
