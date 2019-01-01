import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeListService } from 'src/app/recipes/recipeList.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {

    recipes: Recipe[];
    recipesSuscribtion: Subscription;



    constructor(private recipeListService: RecipeListService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.recipes = this.recipeListService.getRecipes();

        // Listen if Recipes changed and update it
        this.recipesSuscribtion = this.recipeListService.recipeChanged.subscribe((recipes: Recipe[]) => {
            this.recipes = recipes;
        });
    }

    onNewSelect() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.recipesSuscribtion.unsubscribe();
    }
}
