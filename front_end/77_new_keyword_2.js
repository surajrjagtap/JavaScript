// new keyword
function createUser(firstName,lastName,age,address){

    // const user =Object.create(createUser.prototype); // Object.create can be refreance of (createUser.prototype)    user.firstName =firstName;
    this.firstName =firstName;
    this.lastName =lastName;
    this.age =age;
    this.address = address;
   
}

createUser.prototype.about = function (){
    return `${this.firstName} ${this.lastName} is ${this.age} year old. and address is ${this.address}`;

}// new keyword
const user1 =new createUser('suraj','jagtap',35,'pune');  
const user2 = new createUser('mohan','garudkar',30,'mumbai');

console.log(user1); // proto is refrance of createUser function 
console.log(user2.about());
