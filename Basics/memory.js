//  Memories : Stack(Primitive), Heap(Non-primitive)

//+++++++++++++++++ Stack +++++++++++++++

let myRepo = "Javascript";
let anotherRepo = myRepo;
console.log(anotherRepo);
myRepo = "React";
console.log(myRepo);
console.log(anotherRepo);

//++++++++++++++++++++ Heap +++++++++++++++

let userOne = {
    email : "shree@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "Youtube@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

