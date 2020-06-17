"use strict";
var animals = [
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
var mammals = [];
animals.forEach(function (animal) {
    if (animal.mammal) {
        mammals.push(animal);
    }
});
