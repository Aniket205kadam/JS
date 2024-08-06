//*closure scope

//nested scope
function one() {
    const username = "aniket"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);//error
    two()
}

// one()

if (true) {
    const username = "aniket"

    if (username === "aniket") {
        const website = "youtube"
        // console.log(username + " " +  website);
        
    }

    // console.log(website); //error
}

// console.log(username); //error


// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++

console.log(addOne(5)) //6

//function
function addOne(value) {
    return value + 1
}

// console.log(addOne(5)) //6

// console.log(addTwo(5)); //get error

//expersion
const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5));

/*
    addOne() is called before the method decaleration but the addTwo() is not called
    this is called as the hoisting
 */