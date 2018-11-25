export class Recipe {
    name: string;
    descreption: string;
    imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.descreption = desc;
        this.imagePath = imagePath;
    }
}