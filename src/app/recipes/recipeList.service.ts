import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeListService {

    recipeChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) {

    }

    AddIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.setIngredients(ingredients);
    }


    // List of recipes
    private recipes: Recipe[] = [];
   
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipesByIndex(index: number) {
        return this.recipes[index];
    }

    setRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        // this.recipes.push(...recipes);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}