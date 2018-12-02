import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ComponentNameInput') componentName;
  @ViewChild('ComponentAmountInput') componentAmount;

  @Output() saveShoppingList = new EventEmitter<{ componentName: string, componentAmount: number }>();
  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.saveShoppingList.emit({ componentName: this.componentName.nativeElement.value, componentAmount: this.componentAmount.nativeElement.value })
  }


}
