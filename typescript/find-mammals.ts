// Coding Challenge #1 - Return all animals that are mammals
let animals:Array<any> = [
    {
        type: "Dog", 
        mammal: true
    },
    {
        type: "Snake", 
        mammal: false
    },
    {
        type: "Cheetah", 
        mammal: true
    }
];

let mammals:Array<Object> = [];

animals.forEach((animal) => {
    if(animal.mammal) {
        mammals.push(animal);
    }
});