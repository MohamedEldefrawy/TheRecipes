import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeListService } from 'src/app/shared/recipeList.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

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
    let description: string = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeListService.getRecipesByIndex(this.recipeID);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(description, [Validators.required
      ]),
      'ingredients': ingredients
    });
  }

  onNewIngredientClick() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientCount': new FormControl(null, [Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onSubmit() {
    // const newRecipe: Recipe = {
    //   name: this.recipeForm.value['name'],
    //   imagePath: this.recipeForm.value['imagePath'],
    //   description: this.recipeForm.value['description'],
    //   ingredients: (<Ingredient[]>this.recipeForm.get('ingredients').value)
    // };

    if (this.editMode) {
      // console.log(<Ingredient[]>this.recipeForm.get('ingredients').value);
      console.log(this.recipeListService.getRecipesByIndex(this.recipeID));

      this.recipeListService.updateRecipe(this.recipeID, this.recipeForm.value)
      console.log(this.recipeListService.getRecipesByIndex(this.recipeID));
      this.recipeForm.reset();
      this.editMode = false;
    }
    else {
      console.log(this.recipeForm.value);
      console.log(this.recipeForm.get('ingredients').value.ingredients[0]);
      this.recipeListService.setRecipt(this.recipeForm.value);
    }
  }


}
