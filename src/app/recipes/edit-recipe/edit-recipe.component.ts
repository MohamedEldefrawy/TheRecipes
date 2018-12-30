import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private recipeListService: RecipeListService, private router: Router) { }

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
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onCancel() {
    this.recipeForm.reset();
    this.editMode = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    // const newRecipe: Recipe = {
    //   name: this.recipeForm.value['name'],
    //   imagePath: this.recipeForm.value['imagePath'],
    //   description: this.recipeForm.value['description'],
    //   ingredients: (<Ingredient[]>this.recipeForm.get('ingredients').value)
    // };

    if (this.editMode) {
      this.recipeListService.updateRecipe(this.recipeID, this.recipeForm.value)
      this.recipeForm.reset();
      this.editMode = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    else {
      this.recipeListService.setRecipt(this.recipeForm.value);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  onIngredientDelete(ingredientIndex: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);
  }


}
