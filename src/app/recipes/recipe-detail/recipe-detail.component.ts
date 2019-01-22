import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeListService } from "src/app/recipes/recipeList.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.componet.css']
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe: Recipe;
    recipeID: number;

    constructor(private recipeListService: RecipeListService, private router: ActivatedRoute, private route: Router, private modalService: NgbModal) {

    }

    ngOnInit() {
        this.router.params.subscribe((params: Params) => {
            this.recipeID = +params['id'];
            this.recipe = this.recipeListService.getRecipesByIndex(this.recipeID);
        })
    };

    onAddClick() {
        this.recipeListService.AddIngredientToShoppingList(this.recipe.ingredients);
    }

    onEdit() {
        // this.route.navigate(['edit'], { relativeTo: this.router });

        // More Complex way
        this.route.navigate(['../', this.recipeID.toString(), 'edit'], { relativeTo: this.router });
    }

    // Delete The recipe and close the confirmation modal
    Deleted() {
        this.recipeListService.deleteRecipe(this.recipeID);
        this.modalService.dismissAll();
        this.route.navigate(['../'], { relativeTo: this.router })
    }

    // Open the confirmation message modal
    openSm(content: any) {
        this.modalService.open(content, { size: 'sm' });
    }
}
