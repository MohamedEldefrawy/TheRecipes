import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [new Recipe('A test Recipe', ' This is a simle test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg')];

    constructor() { }

    ngOnInit() {

    }
}