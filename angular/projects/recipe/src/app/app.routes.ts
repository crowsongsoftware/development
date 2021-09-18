import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
//import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'},
    { path: 'recipes', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)}
];