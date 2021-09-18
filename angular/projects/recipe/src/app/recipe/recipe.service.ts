import { Injectable } from "@angular/core";
import { RecipeStore } from "./recipe.store";
import { DetailState, ListState } from "./recipe.state";

@Injectable()
export class RecipeService{
    constructor(private recipeStore: RecipeStore){ };

    public get Detail(): DetailState | undefined{
        return this.recipeStore.Detail;
    };

    public get List():Array<ListState>{
        return this.recipeStore.List;
    };
};

/*
constructor(activatedRoute: ActivatedRoute, router: Router){
        this.parseUrlString(router.routerState.snapshot.url); 
    };


 private parseUrlString(path: string): {category: string, id: string} {
     let parsedUrl: Array<string> = path.split("/");

     console.log("parsedUrl: ", parsedUrl);

     return {category: parsedUrl[1], id: parsedUrl[2]}
    };

    public get List(): IVM_RecipeList{
        return recipeList;
    };

    public get Detail(): IVM_RecipeDetail{
        return {
            description: '',
            directions: [],
            id:'',
            image: '',
            ingredients: [],
            nutritionInformation: [],
            summary: [],
            title: ''
        }
    } 
*/