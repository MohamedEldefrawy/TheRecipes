import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: string;
    descrebtion: string;
    imagePath: string;
    ingredient: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.descrebtion = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}