import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeListService } from "../recipes/recipeList.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorgeService {

    constructor(private http: Http, private recipeService: RecipeListService) { }

    storeRecipes() {
        return this.http.put('https://recipes-book-48de8.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://recipes-book-48de8.firebaseio.com/recipes.json')
            .pipe(map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (recipe['ingredients'] == undefined) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }))
            .subscribe((recipes: Recipe[]) => {

                this.recipeService.setRecipes(recipes);
            });
    }

}