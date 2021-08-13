export interface IVM_RecipeList{
    id: string;
    image: string;
    title: string;
};

export interface IVM_RecipeDetail extends IVM_RecipeList{
    description: string;
    directions: Array<string>;
    ingredients: Array<string>;
    nutritionInformation: Array<string>;
    summary: Array<string>;
};