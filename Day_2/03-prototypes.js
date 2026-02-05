/*
Prototypes in JS
*/

// Object Prototype

const Student = {
    name: "Unknown",
    age: 21,
    base: function(){
        console.log("This is a message from base class")
    },
    study: function(){
        console.log(`${this.name} is studying.`)
    }
}



