export class Recipe {
    name: string;
    descrebtion: string;
    imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.descrebtion = desc;
        this.imagePath = imagePath;
    }
}