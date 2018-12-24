import { Output } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    // ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientChanged = new Subject<Ingredient[]>();

    @Output()
    setingredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice())
    }

    @Output()
    setIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    @Output()
    getIngredients() {
        return this.ingredients.slice();
    }

}