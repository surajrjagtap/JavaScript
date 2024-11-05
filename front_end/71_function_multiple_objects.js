function createUser(firstName,lastName,age,address){

    const user ={};
    user.firstName =firstName;
    user.lastName =lastName;
    user.age =age;
    user.address =address;
    user.about =function(){
        // console.log(this.firstName);
        return `${this.firstName} ${this.lastName} is ${this.age} year old. and address is ${this.address}`;
    }
    return user;
}

const user1 = createUser('suraj','jagtap',35,'pune');
const user2 = createUser('mohan','garudkar',30,'mumbai');

console.log(user1);
console.log(user2);

const about = user1.about();
console.log(about)
console.log(user2.about());
