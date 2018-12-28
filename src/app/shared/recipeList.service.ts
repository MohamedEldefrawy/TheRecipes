import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
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
    private recipes: Recipe[] = [new Recipe(0, 'teriyaki chicken', 'yummi', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg', [new Ingredient('Chicken', 1), new Ingredient('French fries', 20)]),
    new Recipe(1, 'beef burger', ' This is a simle test', 'https://img.taste.com.au/Gtj94o4m/w643-h428-cfill-q90/taste/2016/11/homestyle-beef-burger-81486-1.jpeg', [new Ingredient('Beef burger', 1), new Ingredient('lettuce', 1), new Ingredient('Cheese', 1)])];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipesByIndex(index: number) {
        return this.recipes[index];
    }
}