import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListService } from '../shared/recipeList.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeListService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeListService: RecipeListService) { }

  selectedRecipe: Recipe;

  ngOnInit() {

  }
}
