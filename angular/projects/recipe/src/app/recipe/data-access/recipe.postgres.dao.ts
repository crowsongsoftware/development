import { Injectable } from "@angular/core";
import { IRecipeDataAccess } from "./recipe.dao";
import { DetailState } from "../recipe.state";

@Injectable()
export class RecipePostgresDataAccess implements IRecipeDataAccess{
    getAllRecipes(): Array<DetailState> {
        return [];
    };

    getRecipesByCategory(categoryId: string): Array<DetailState> {
        return [];
    };

    getRecipesByIngredients(ingredients: string[]): Array<DetailState> {
        return [];
    };

    getRecipeById(recipeId: string): DetailState {
        return    {
            categories: [],
            description: "RecipePostgresAcess:getRecipeById",
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