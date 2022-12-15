export default class Dog {
    id: number;
    name: string;
    breed: string;
    age: number;
    gender: 'M' | 'F';
    imgURL: string;

    constructor(name: string, breed: string = '', age: number = 0, 
                gender: 'F' | 'M' = 'F', imgURL: string = '') {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.imgURL = imgURL;
        this.id = Dog.getNewId();
    }

    static getNewId(): number {
        return Date.now();
    }
}