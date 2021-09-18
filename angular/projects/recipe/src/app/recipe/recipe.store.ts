import { Injectable } from '@angular/core';
import { Store } from '../state-management/store';
import {  Category, RecipeState, DetailState, ListState, testState, recipeState } from './recipe.state';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecipeStore extends Store<RecipeState>{
  private _state!: RecipeState;
  private _detail!: DetailState;
  private _list: Array<ListState> = [
    {
      categories: ["Breakfast"],
      id: "0",
      image: "path/to/image",
      title: "Hardcoded...change"
    }
  ];

  constructor() {
    super(recipeState);
  };

  private Id(): string{
    let id: string = "2";
    console.log("RecipeStore: Id(): id: ", id);
    
    return id;
  };

  private Categories(): Array<string>{
    let categories: Array<string> = [ "Breakfast" ];

    console.log("RecipeStore: getCategory(): category: ", categories);

    return categories;
  }

  public get List(): Array<ListState>{
    let list: Array<ListState> = [];
   
    recipeState.forEach(recipe =>{
      // Log
      console.log("recipeStore: List(): recipeState.forEach(): recipe: ", recipe);

      // Get category of each recipe and compare to selected catagories
      recipe.categories.forEach(category =>{
        console.log("RecipeStore: List(): recipe.category.forEach(): category: ", category);
      });
      
      // For each recipe check the array of categories with the selected array of categories
      if(recipe.categories.filter(category => 
        this.Categories().includes(category))){
          console.log("Category MATCHED!");
        };
        //console.log("category: ", category);

        //
        //list.push(recipe);
    });

    return list;
  };

  public get Detail(): DetailState | undefined{
    let detail: DetailState | undefined = this.State.find(x => x.id === this.Id())
    console.log("RecipeStore: Detail(): detail: ", detail);

    return detail;
  };
};

//list?.push(this._state.find(x => x.category === ["breakfast"]));
