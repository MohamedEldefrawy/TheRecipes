import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    id: number;
    name: string;
    descrebtion: string;
    imagePath: string;
    ingredient: Ingredient[];

    constructor(id: number, name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.descrebtion = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}