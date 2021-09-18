import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ListState } from '../recipe.state';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<ListState>;

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.List;
   };

  ngOnInit(): void { 
    console.log("recipes: ", this.recipes);
  };
};

