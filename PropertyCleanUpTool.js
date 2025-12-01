/*

1. Property Cleanup Tool
    Create a function sanitize(obj) that removes all properties whose value is null, undefined, or an empty string.
    The function must:
        Modify the original object
        Return the number of removed keys 
        
    Provide an example input and final cleaned object.

 */

// removes property which contains [ null, undefined, empty string ] 
function sanitize(obj)
{
    let number_of_keys = 0;
    
    // iterate the obj using key
    for(let key in obj){
        if(obj[key] == undefined || obj[key] == null || obj[key] == ""){
            number_of_keys += 1; // count the property with [ null, undefined, empty string ] 
            delete obj[key]; // delete the property
        }
    }
    return number_of_keys; // total number of keys to be deleted 
}

// Person object constructor function
function Person(name, age, gender, address, height, weight )
{
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.address = address ?? null;
}

// Creating object using constructor function
const person = new Person(name="alex", age=20, gender="", address=null, height=180);

console.log("Before Sanitization Object looks like: ")
console.log(person);


let number_of_keys = sanitize(person);


console.log("\nAfter Sanitization Object looks like: ")
console.log(person);

console.log("\nTotal " + number_of_keys + " number of keys are deleted.");



/*
Example Input:

    Person {
    name: 'alex',
    age: 20,
    gender: '',
    height: 180,
    weight: undefined,
    address: null
    }

Output: Person { name: 'alex', age: 20, height: 180 }
    Total 3 number of keys are deleted.
*/
