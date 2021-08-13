import { Injectable } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { IVM_RecipeDetail, IVM_RecipeList } from "./recipe.viewmodel";
import recipeList from '../data/data.json';

@Injectable()
export class RecipeService{
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
};