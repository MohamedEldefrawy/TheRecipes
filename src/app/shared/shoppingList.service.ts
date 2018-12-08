import { Output, EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [];
    ingredientChanged = new EventEmitter<Ingredient[]>();

    @Output()
    setingredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    @Output()
    getIngredients() {
        return this.ingredients.slice();

    }

}