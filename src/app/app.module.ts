import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes//recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shared/shoppingList.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from './app-routing-module';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';


@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesComponent,
    PageNotFoundComponent,
    NoRecipeSelectedComponent],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
