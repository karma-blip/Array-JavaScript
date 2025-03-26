//Finding last elements
const arr1 = [3,7,34,90,12];
const arr2 = [true, "green", "where",12,56];

console.log(arr1[arr1.length - 1]); 
console.log(arr2[arr2.length - 1]); 

//Joining arrays to strings
const myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" ")); 

//Sorting arrays
const arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort((a, b) => a - b)); 

//Removing duplicates
const arr = ["boy", "man", "girl", "school", "girl", "woman"];
const unique = [...new Set(arr)];
const duplicates = arr.filter(item => arr.filter(x => x === item).length > 1);

console.log("Unique:", unique); 
console.log("Duplicates:", duplicates); 

//Looking for 'food'
const arr5 = ["the", "way", "x", 4];
console.log(arr5.includes("food") ? "food" : "the search word was not found");

//Sorting strings
const word = "renniw";
console.log([...word].sort().join("")); 

//Inserting 'tomato' at index 5
const fruits = ["Apple", "Banana", "Cherry", "Date", "Guava", "Fig", "Grape", "Watermelon", "Mangos", "Orange"];
fruits.splice(5, 0, "Tomato");
console.log(fruits); 





