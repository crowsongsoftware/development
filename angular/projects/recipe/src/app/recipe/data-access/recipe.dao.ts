import { Injectable } from "@angular/core";
import { DetailState } from "../recipe.state";

export interface IRecipeDataAccess{
    getAllRecipes(): Array<DetailState>;
    getRecipesByCategory(categoryId: string): Array<DetailState>;
    getRecipesByIngredients(ingredients: Array<string>): Array<DetailState>;
    getRecipeById(recipeId: string): DetailState;
};

export abstract class RecipeDataAcess implements IRecipeDataAccess{
    abstract getAllRecipes(): Array<DetailState>;
    abstract getRecipesByCategory(categoryId: string): Array<DetailState>;
    abstract getRecipesByIngredients(ingredients: Array<string>): Array<DetailState>;
    abstract getRecipeById(recipeId: string): DetailState;
};