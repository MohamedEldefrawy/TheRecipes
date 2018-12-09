import { Recipe } from '../recipes/recipe.model';
import { Output, Input, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Injectable()
export class RecipeListService {

    constructor(private shoppingListService: ShoppingListService) {

    }

    AddIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.setIngredients(ingredients);
    }


    // List of recipes
    private recipes: Recipe[] = [new Recipe('A test Recipe', ' This is a simle test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg', [new Ingredient('Chicken', 1), new Ingredient('French fries', 20)])];

    // Selected recipe Event
    @Input() RecipeSelect = new EventEmitter<Recipe>();

    @Output() getRecipes() {
        return this.recipes.slice();
    }
}