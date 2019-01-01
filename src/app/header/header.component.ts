import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorgeService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeListService } from '../recipes/recipeList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private dataStorgeService: DataStorgeService, private recipeService: RecipeListService) { }

  setRecipesSubscription: Subscription;
  getREcipesSubscription: Subscription;

  ngOnInit() {
  }

  onSaveData() {
    this.setRecipesSubscription = this.dataStorgeService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.setRecipesSubscription = this.dataStorgeService.getRecipes()
  }

  ngOnDestroy() {
    this.setRecipesSubscription.unsubscribe();
    this.setRecipesSubscription.unsubscribe();
  }
}
