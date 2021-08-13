import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe.component';

export const recipeRoutes: Routes = [
    { 
        path: '', component: RecipeComponent,
        children: [
            { path: 'breakfast', component: RecipeListComponent, outlet: 'list' },
            { path: 'breakfast/:id', component: RecipeDetailComponent, outlet: 'detail' }
        ]
    }
];
