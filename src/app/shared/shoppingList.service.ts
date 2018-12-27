import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    // ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientChanged = new Subject<Ingredient[]>();

    // @Input() selectedIngredientIndex: number = null;

    //Using Observables
    selectedIndexChanged = new Subject<number>();

    setingredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice())
    }

    setIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }


    getIngredients() {
        return this.ingredients.slice();
    }


    getIngredientbyID(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;

        this.ingredientChanged.next(this.ingredients.slice());
    }


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