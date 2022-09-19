// call function is used to call obj and variables in side function 
// call function not supporting array contents

function sayHello() {
return "hello  " + this.name
}
var obj = { name: "sandy" } 

console.log(sayHello.call(obj));