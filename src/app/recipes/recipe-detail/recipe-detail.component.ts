import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeListService } from "src/app/shared/recipeList.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.componet.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    recipeID: number;
    constructor(private recipeListService: RecipeListService, private router: ActivatedRoute, private route: Router) {

    }

    ngOnInit() {
        this.router.params.subscribe((params: Params) => {
            this.recipeID = +params['id'];
            this.recipe = this.recipeListService.getRecipesByIndex(this.recipeID);
        })

    }

    onAddClick() {
        this.recipeListService.AddIngredientToShoppingList(this.recipe.ingredient);
    }

    onEdit() {
        // this.route.navigate(['edit'], { relativeTo: this.router });

        // More Complex way 
        this.route.navigate(['../', this.recipeID.toString(), 'edit'], { relativeTo: this.router });
    }

}