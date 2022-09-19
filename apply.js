// apply function not support not support object type contents

const person = {
    fullName: function (city, country , kiya) {
        return this.firstName + " " + this.lastName + "," + city + "," + country+ ","+ kiya;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway","rahul"]));