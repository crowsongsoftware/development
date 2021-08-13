/*=======================
        Recipe State
  =======================
*/

import { RecipeStore } from "./recipe.store";

/*========================
        State Enums 
  ======================== 
*/
export const enum Category{
    "Breakfast",
    "Lunch",
    "Main Dish",
    "salads",
    "deserts",
    "grains",
    "legumes"
};

/*========================
      State Interfaces
  ========================*/
export interface ListState {
    category: Array<string>;
    id: string;
    image: string;
    title: string;
};

export interface DetailState extends ListState {
    description: string;
    directions: Array<string>;
    ingredients: Array<string>;
    nutritionInformation: Array<string>;
    summary: Array<string>;
};

/*========================
        State Types
  ========================
*/
export type RecipeState = Array<DetailState>;

/*========================
           State 
  ========================
*/
export const undefinedState: RecipeState = [

];

export const defaultState: RecipeState = [

];

export const testState: RecipeState = [
    {
        category: [
            "Breakfast"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "1",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Herbs and spices make this a delicious scramble"
        ],
        title: "Southwest Tofu Scramble"
    },
    {
        category: [
            "lunch",
            "Main Dish"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "2",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Excellent for quick lunches, bake and refrigerate"
        ],
        title: "Baked Tofu Steaks"
    },
    {
        category: [
            "lunch",
            "Main Dish"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "3",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Excellent for quick lunches, bake and refrigerate"
        ],
        title: "Baked Tofu Steaks"
    }
];

export const recipeState: RecipeState = [
    {
        category: [
            "Breakfast"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "1",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Herbs and spices make this a delicious scramble"
        ],
        title: "Southwest Tofu Scramble"
    },
    {
        category: [
            "lunch",
            "Main Dish"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "2",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Excellent for quick lunches, bake and refrigerate"
        ],
        title: "Baked Tofu Steaks"
    },
    {
        category: [
            "lunch",
            "Main Dish"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "3",
        image: "assets/images/southwest_tofu_scramble.jpg",
        ingredients: [
            "1 cup of this",
            "2 tbs of that",
            "1/8 tsp of this that",
            "sprinkle of that and then this"
        ],
        nutritionInformation: [
            "Nutritional One",
            "Nutritional Two",
            "Nutritional Three",
            "Nutritional Four"
        ],
        summary: [
            "Excellent for quick lunches, bake and refrigerate"
        ],
        title: "Baked Tofu Steaks"
    }
];