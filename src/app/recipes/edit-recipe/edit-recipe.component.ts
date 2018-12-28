import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeListService } from 'src/app/shared/recipeList.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeID: number;
  recipeForm: FormGroup;

  // If The item allowed to be edited
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private recipeListService: RecipeListService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeID = +params['id'];

      // Assign editMode to true if id exist
      this.editMode = params['id'] != null;
    })

    this.initForm();
  }

  initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let descreption: string = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeListService.getRecipesByIndex(this.recipeID);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      descreption = recipe.descrebtion;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'ingredientName': new FormControl(ingredient.name),
            'ingredientCount': new FormControl(ingredient.amount)
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(descreption),
      'ingredients': ingredients
    });
  }
  onSubmit() {
    console.log("Submitted");
  }


}
