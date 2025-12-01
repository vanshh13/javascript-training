/*

3.Build Your Own Minimal Object Schema Validator
    Design a function validate(data, schema) that validates an object based on a schema.
    {
    name: { type: "string", required: true, minLength: 2 },
    age: { type: "number", min: 0, max: 120 },
    active: { type: "boolean", required: true },
    address: {
        type: "object",
        schema: {
        city: { type: "string", required: true },
        pin: { type: "string" }
        }
    }
    }

*/

function validate(data, schema)
{
    for(let key in schema)
    {
        // present in data
        if(key in data)
        {
            if(typeof data[key] == "object"){
                let innerdata = data[key];
                let innerschema = schema[key].schema;
                        if( !(validate(innerdata, innerschema)) ) {
                            console.log(`Object  ${key}  has invalid schema !!`);
                            return false;
                        }
                
            }
            else{
                if(typeof data[key] == schema[key].type){
                    if(key == "name"){
                        if(!(data[key].length >= schema[key].minLength)){
                            console.log("Length of name must be grether than " + schema[key].minLength);
                            return false;
                        }
                    }
                    if(key == "age"){
                        if(!(data[key] >= 0 && data[key] <=  120)){
                            console.log("Age must be between 0 to 120 !!");
                            return false;
                        }
                    }
                }
                // data type mismatched
                else{
                    console.log(key + " data-type must be " + key.type  + " !!");
                    return false;
                }
            }
        }
        // if key isn't present inside data and it's required according to schema then,
        else if(schema[key].required == true && (!(key in data)) ){
            console.log(key + " required to be present in data !!");
            return false;
        }
    }
    return true;
}

Personschema = {
    name: { type: "string", required: true, minLength: 2 },
    age: { type: "number", min: 0, max: 120 },
    active: { type: "boolean", required: true },
    address: {
        type: "object",
        schema: {
        city: { type: "string", required: true },
        pin: { type: "string" }
        }
    }
};

// Person object constructor function
function Person(name, age, active, address)
{
    this.name = name;
    this.age = age;
    this.active = active;
    this.address = address ?? null;
}

// Creating object using constructor function
const person1 = new Person(name="Raj", age=21, active=true, address={city: "ahemdabad", pin: "380001"});

if( validate(person1, Personschema) ){
    console.log("Schema is validate for object");
    console.log(person1);
    console.log("Successful !!");
}
else{
    console.log("Schema is invalid !!");
}

