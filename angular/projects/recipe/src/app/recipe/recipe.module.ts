import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { recipeRoutes } from './recipe.routes';
import { RecipeService } from './recipe.service';
import { RecipeStore } from './recipe.store';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes)
  ],
  providers:[
    RecipeService,
    RecipeStore
  ],
  exports:[
    RecipeComponent
  ]
})
export class RecipeModule { }
