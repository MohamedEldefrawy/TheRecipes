import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { Recipe } from '../../recipe.model';
import { RecipeListService } from "src/app/shared/recipeList.service";


@Component({

    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(private recipeListService: RecipeListService) {

    }

    ngOnInit() {
    }

    onRecipeSelected() {
        this.recipeListService.RecipeSelect.emit(this.recipe);
    }
}