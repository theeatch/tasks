// Function to check if an array contains a specified value
function arrayContainsValue(arr, value) {
    return arr.includes(value);
}

// Function to append an object to an array
function appendObjectToArray(arr, obj) {
    arr.push(obj);
    return arr;
}

// Function to add an element to the start of an array
function addElementToStart(arr, element) {
    arr.unshift(element);
    return arr;
}

// Function to convert a string to an array
function stringToArray(str) {
    return Array.from(str);
}

// Function to get the first three characters of a string
function getFirstThreeCharacters(str) {
    return str.slice(0, 3);
}

// Testing the functions
let testArray = [1, 2, 3, 4, 5];
console.log("Array Contains 3:", arrayContainsValue(testArray, 3));

let sampleObject = { name: "John", age: 30 };
console.log("Appending Object:", appendObjectToArray(testArray, sampleObject));

let newArray = [10, 20, 30];
console.log("Adding Element to Start:", addElementToStart(newArray, 5));

let testString = "Hello";
console.log("String to Array:", stringToArray(testString));

let anotherString = "JavaScript";
console.log("First Three Characters:", getFirstThreeCharacters(anotherString));
