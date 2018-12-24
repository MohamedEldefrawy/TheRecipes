import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeID: number;

  // If The item allowed to be edited
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeID = +params['id'];

      // Assign editMode to true if id exist
      this.editMode = params['id'] != null;
    })
  }

}
