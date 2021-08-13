import { Injectable } from '@angular/core';
import { Store } from '../state-management/store';
import {  Category, RecipeState, DetailState, ListState, testState, recipeState } from './recipe.state';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecipeStore extends Store<RecipeState>{
  constructor() {
    super(testState);
  };

  private detailId(): string{
    let id: string = "1";

    return id;
  };

  private categoryId(): Category{
    let id: Category = 0;

    switch(id){
      return Category.
    }

    return id;
  };

  public get Detail(): DetailState | undefined{
    let detail: DetailState | undefined = this.State.find(x => x.id === this.detailId())

   //if (!detail){
    //detail = 
   //}

   return detail;
  };


  public get List(): Array<ListState>{
    this.State.find(x => x.category.find(this.categoryId()) );

    return [];
  };
}
