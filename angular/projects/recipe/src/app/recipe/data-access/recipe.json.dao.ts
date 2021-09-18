import { Injectable } from "@angular/core";
import { IRecipeDataAccess } from "./recipe.dao";
import { DetailState } from "../recipe.state";

@Injectable()
export class RecipeJsonDataAccess implements IRecipeDataAccess{
    getAllRecipes(): Array<DetailState> {
        return [
            {
                categories: [],
                description: "RecipeJsonAccess:getAllRecipes",
                directions: [],
                id: "",
                image: "",
                ingredients: [],
                nutritionInformation: [],
                summary: [],
                title: ""
            }
        ];
    };

    getRecipesByCategory(categoryId: string): Array<DetailState> {
        return [
            {
                categories: [],
                description: "RecipeJsonAccess:getRecipesByCategory",
                directions: [],
                id: "",
                image: "",
                ingredients: [],
                nutritionInformation: [],
                summary: [],
                title: ""
            }
        ];
    };

    getRecipesByIngredients(ingredients: string[]): Array<DetailState> {
        return [
            {
                categories: [],
                description: "RecipeJsonAccess:getRecipesByIngredients",
                directions: [],
                id: "",
                image: "",
                ingredients: [],
                nutritionInformation: [],
                summary: [],
                title: ""
            }
        ];
    };

    getRecipeById(recipeId: string): DetailState {
        return    {
            categories: [],
            description: "RecipeJsonAccess:getRecipeById",
            directions: [],
            id: "",
            image: "",
            ingredients: [],
            nutritionInformation: [],
            summary: [],
            title: ""
        };
    };
};