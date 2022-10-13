let originalDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array copy elements
let slicedDogs = originalDogs.slice(1, 2);
let copyDogs = [...originalDogs];
let dogs = originalDogs.slice(0);

//Stack Functions
let pushDog = dogs.push("Golden Retriever");
let popDogs = dogs.pop;
dogs[dogs.length] = "Poodle";

//Add and remove from first
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift;

//Atomic add and remove
dogs.splice(2, 1, "Pugs", "Boxer");

//Array Functions
let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {
    console.log("Scan : " + first + " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals)
    allAnimals += animal + " ";
console.log("Animals : " + allAnimals);