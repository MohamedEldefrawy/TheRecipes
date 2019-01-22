import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorgeService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeListService } from '../recipes/recipeList.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private dataStorgeService: DataStorgeService, private recipeService: RecipeListService, private authService: AuthService) { }

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

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.setRecipesSubscription.unsubscribe();
    this.setRecipesSubscription.unsubscribe();
  }
}
