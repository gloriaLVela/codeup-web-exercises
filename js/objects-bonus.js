/***

 Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.

 Example input: ["fred", true, 5, 3] Example output: [3, 5]


 **/

function filterNumbers(inputArray) {
    var outputArray =[];
    inputArray.forEach(function(item){
        if (typeof item === "number") {
            outputArray.push(item);
        }
    });

    return outputArray.sort();s
}

console.log(filterNumbers(["fred", true, 5, 3]));
// console.log("every");
// console.log(["fred", true, 5, 3].every(typeof === "number"));

/**

 Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

 Example input:

 [
 {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
 {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
 {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
 ]
 Example output

 [
 {
        name: "Chompers",
        breed: "Pug",
        age: 8
    },
 {
            name: "Freddy",
            breed: "Lab",
            age: 5
        },
 {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 11
        }
 ]

 **/

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

dogs.forEach(function(dog){
   dog.age = dog.age + 1;
})

console.log(dogs);

/**
 Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

 Example input:

 [
 {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
 {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
 {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
 ]
 Example output

 [
 {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: false // changed to false
    },
 {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false // stays the same
        },
 {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: false // changed to false
        }
 ]

 */

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

function washCars(cars){
    cars.forEach(function(car){
       car.isDirty = false;
    });
    return cars;
}

console.log(washCars(cars));


/**
 Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

 Example Input:

 [
 {
            isAdmin: true,
            email: 'user1@email.com'
        },
 {
            isAdmin: true,
            email: 'user2@email.com'
        }
 {
            isAdmin: false,
            email: 'user3@email.com'
        }
 ]
 Example Output (before refactor): 2

 Example Output (after 1st refactor):

 [
 'user1@email.com',
 'user2@email.com'
 ]
 Example Output (after 2nd refactor):

 [
 {
        isAdmin: true,
        email: 'user1@email.com'
    },
 {
        isAdmin: true,
        email: 'user2@email.com'
    }
 ]

 */


var adminArray = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

function adminList(adminArray){
    var countAdmins = 0;
    adminArray.forEach(function(person){
      if (person.isAdmin)  countAdmins++;
    });

    return countAdmins;
}

console.log(adminList(adminArray));


function adminListEmails(adminArray){
    var emailList = [];
    adminArray.forEach(function(person){
        if (person.isAdmin)  emailList.push(person.email);
    });

    return emailList;
}

console.log(adminListEmails(adminArray));


function adminListObj(adminArray){
    var emailList = [];
    adminArray.forEach(function(person){
        if (person.isAdmin)  emailList.push(person);
    });

    return emailList;
}

console.log(adminListObj(adminArray));

/**
 Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

 Example Input:

 var breads  = [
 "white",
 "wheat",
 "rhy",
 "white"
 ];

 var fillings = [
 "pb&j",
 "ham",
 "cheese steak",
 "tuna"
 ];

 makeSandwhichObjects(breads, fillings)
 Example Output:

 [
 {
            bread: "white,
            filling: "pb&j"
        },
 {
            bread: "wheat",
            filling: "ham"
        },
 {
            bread: "rhy",
            filling: "cheese steak"
        },
 {
            bread: "white",
            filling: "tuna"
        }
 ]

 **/

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwhichObjects(breads, fillings){

    var objSandwhich = "";
    var sandwhichArray = [];

    breads.forEach(function(type, index) {
        // Create the sandwhich
        objSandwhich = {
            bread:type,
            filling: fillings[index]
        };

        sandwhichArray.push(objSandwhich);
    });
    return sandwhichArray;
}

console.log(makeSandwhichObjects(breads, fillings));