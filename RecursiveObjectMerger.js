/* 

2.Recursive Object Merge
 Write a function mergeDeep(a, b) that merges two objects as follows:
    If a key exists only in b, copy it to a.
    If a key exists in both and both values are objects, merge recursively.

    Otherwise, overwrite the value in a with the value from b.
        Demonstrate with a multi-level nested structure.

 */

// function merges person1 & person2 based on above conditions
function mergeDeep(person1, person2)
{
    // iterate through person1's key
    for(let key in person1)
    {
        // if key is object & both have the key
        if(typeof person1[key] == "object"){
            if(key in person2){
                mergeDeep(person1[key], person2[key]); // recursive call for object
            }
        }
        // if key-value present inside person1 & person2  ( except the person2's keys value must not be [ null, undefined ] )
        else if(key in person1 && key in person2 && (person2[key] != undefined && person2[key] != null)){
            person1[key] = person2[key]; // copying the value
        }
    }

    // iterate through person2's key
    for(let key in person2)
    {
        // if person1 don't have the key then,
        if(!(key in person1))
        {
            // if key is object 
            if(typeof person1[key] == "object"){
                // making separet copy of object inside person1
                person1[key] = structuredClone(person2[key]);
            }
            else{
                // if key has premitive data-type
                person1[key] = person2[key];
            }
        }
    }
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
const person1 = new Person(name="Raj", age=20, gender="male", address={city: "ahemdabad", state: "Gujarat", Bulding: "yashoda appartments"}, height=180, weight= 65);

const person2 = new Person(name="Robert", age=23, gender="male", address={city: "gandhinagar", state: "Gujarat", village: "Taltej"}, height=190);

console.log("Before merge person1 : ");
console.log(person1);

mergeDeep(person1, person2);

console.log("\nAfter merge person1 : " );
console.log(person1);


/* 

Input: 
person1 = {name="Raj", age=20, gender="male", address={city: "ahemdabad", state: "Gujarat", Bulding: "yashoda appartments"}, height=180, weight= 65}
person2 = {name="Robert", age=23, gender="male", address={city: "gandhinagar", state: "Gujarat", village: "Taltej"}, height=190}

Output: 

    Before merge person1 : 
    Person {
    name: 'Raj',
    age: 20,
    gender: 'male',
    height: 180,
    weight: 65,
    address: {
        city: 'ahemdabad',
        state: 'Gujarat',
        Bulding: 'yashoda appartments'
    }
    }

    After merge person1 : 
    Person {
    name: 'Robert',
    age: 23,
    gender: 'male',
    height: 190,
    weight: 65,
    address: {
        city: 'gandhinagar',
        state: 'Gujarat',
        Bulding: 'yashoda appartments',
        village: 'Taltej'
    }
    }

*/