var par = new Promise((resolve, reject) => {

})
//console.log(par)
/* 
it has four stage
first is pending (it is default pending)
resole
reject
setle
*/

/* Hosting is define 
z = 100 
console.log(z)
var z; deifne var is called hosting

*/


/* == (equality) and ===(identity) diffrent */

//1
/* console.log(0 ===false)// false
console.log(false ===false)// true
console.log(false ==0) // true */
// comapare two date
/* var d = new Date()
var d1 = new Date()
console.log(d.getTime() == d1.getTime()); */
/////////////////////  apply ///////////////////////////////////////////

function d(m){
    //return this.name + " is   " + m;
}
var j ={ name: "rahul" };

//console.log(d.apply(j, ["hello man"]))

////////////////////////// bind ////////////////////////////////

/* var car = {
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.call(car, "Vivian"); */

function sayHello() 
{ 
    return "hello  " + this.name 
}
var obj = { name: "sandy" } 

//console.log( sayHello.call(obj))

function bikeDetails() 
{ 
    console.log(this)
} 

var per1 = bikeDetails.bind({ name: 'rahul', 'gahr': "mishrawaliya" });
per1();

