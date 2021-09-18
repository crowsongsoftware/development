import { DetailState, ListState } from "../recipe.state";

export interface DetailViewModel{
    get Detail(): DetailState;
    set Detail(state: DetailState);
};

export interface ListViewModel{
    get List(): ListState;
    set List(state: ListState);
};




/*
this.recipe = {
        categories: ['...undefined'],
        description: '...undefined',
        directions: ['...undefined'],
        id: '...undefined',        image: '',
        ingredients: ['...undefined'],
        nutritionInformation: ['...undefined'],
        summary: ['...undefined'],
        title: '...undefined'
      }
      */
