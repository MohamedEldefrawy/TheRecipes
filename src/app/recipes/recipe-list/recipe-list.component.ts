import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeListService } from 'src/app/shared/recipeList.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    recipes: Recipe[];


    constructor(private recipeListService: RecipeListService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.recipes = this.recipeListService.getRecipes();

    }

    onNewSelect() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
}
