import { Recipe } from '../recipes/recipe.model';
import { Output, Input, EventEmitter } from '@angular/core';

export class RecipeListService {

    // List of recipes
    private recipes: Recipe[] = [new Recipe('A test Recipe', ' This is a simle test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg')];

    // Selected recipe Event
    @Input() RecipeSelect = new EventEmitter<Recipe>();

    @Output() getRecipes() {
        return this.recipes.slice();
    }

}