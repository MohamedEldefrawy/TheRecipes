import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeListService } from "src/app/shared/recipeList.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.componet.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;
    constructor(private recipeListService: RecipeListService) {

    }

    ngOnInit() {

    }

    onAddClick() {
        this.recipeListService.AddIngredientToShoppingList(this.recipe.ingredient);
    }

}