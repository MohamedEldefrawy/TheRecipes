import { Output, Input } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    // ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientChanged = new Subject<Ingredient[]>();

    // @Input() selectedIngredientIndex: number = null;

    //Using Observables
    selectedIndexChanged = new Subject<number>();


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

    @Output()
    deleteIngredient(index: number) {
        // if (this.selectedIngredientIndex != null) {
        //     this.ingredients.splice(index, 1);
        //     this.ingredientChanged.next(this.ingredients.slice());
        // }
        // else {
        //     alert("Please Select an Ingredient");
        // }

        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}