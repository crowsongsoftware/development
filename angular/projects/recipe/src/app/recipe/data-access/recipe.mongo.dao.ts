import { Injectable } from "@angular/core";
import { IRecipeDataAccess } from "./recipe.dao";
import { DetailState } from "../recipe.state";

@Injectable()
export class RecipeMongoDataAccess implements IRecipeDataAccess{
    getAllRecipes(): Array<DetailState> {
        return [
            {
                categories: [],
                description: "RecipeaMongoAccess:getAllRecipes",
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
                description: "RecipeMongoAccess:getRecipesByCategory",
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
                description: "RecipeMongoAccess:getRecipesByIngredients",
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
            description: "RecipeMongoAccess:getRecipeById",
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