/*=======================
        
   *** Recipe State ***
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

/*=====================================================
      View State Interfaces
        - List View
        - Detail View

      TODO: Change names to above, ...ViewModels??
  =====================================================*/
export interface ListState {
    categories: Array<string>;
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
export const emptyState: RecipeState = [
    {
        categories: [],
        description: "",
        directions: [],
        id: "",
        image: "",
        ingredients: [],
        nutritionInformation: [],
        summary: [],
        title: ""
    }
];

export const defaultState: RecipeState = [
    {
        categories: [],
        description: "",
        directions: [],
        id: "",
        image: "",
        ingredients: [],
        nutritionInformation: [],
        summary: [],
        title: ""
    }
];

export const testState: RecipeState = [
    {
        categories: [
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
        categories: [
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
        image: "assets/images/southwest_tofu_scramble_2.jpg",
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
        categories: [
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
        image: "assets/images/southwest_tofu_scramble_3.jpg",
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
        title: "Baked Beans"
    }
];

export const recipeState: RecipeState = [
    {
        categories: [
            "Breakfast"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "1",
        image: "assets/images/southwest_tofu_scramble_1.jpg",
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
        categories: [
            "Lunch",
            "Main Dish"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "2",
        image: "assets/images/southwest_tofu_scramble_2.jpg",
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
        categories: [
            "Breakfast",
            "Lunch"
        ],
        description: "Placeholder for Recipe Description",
        directions: [
            "Direction one...first do this",
            "Direction two...ok, second do that",
            "Direction three...thirdly, do this and that",
            "Direction four...lastly do that and then this"],
        id: "3",
        image: "assets/images/southwest_tofu_scramble_3.jpg",
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
        title: "Baked Beans"
    }
];