import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";
import { NoRecipeSelectedComponent } from "./recipes/no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EditRecipeComponent } from "./recipes/edit-recipe/edit-recipe.component";


const appRouts: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: NoRecipeSelectedComponent },
            { path: 'new', component: EditRecipeComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: EditRecipeComponent }]
    },
    { path: 'shoppingList', component: ShoppingListComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

export const routing = RouterModule.forRoot(appRouts);

export class AppRoutigModule {

}