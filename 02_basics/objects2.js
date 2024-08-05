// singleton => construction

const tinderUser = new Object() // singleton object
// const tinderUser = {} // non-sigleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "aniket@gmail.com",
    fullname: {
        username: {
            firstname: "aniket",
            lastname: "kadam"
        }
    }
}

// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

const obj4 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj4);
//                       target, sources 
// const obj5 = Object.assign({}, obj1, obj2) //{} is the target where all the value are stored and if you are not mention this then all value stored in the first object and return the first object
// console.log(obj5);

// const obj6 = Object.assign(obj1, obj2)

// console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = Object.assign({}, obj1, obj2)

// console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);//{ '1': 'a', '2': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); //return the array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('IsLogged')); //false

//++++++++++ Object de-structure +++++++++++++++++

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}
//repeatedly write the course ref
// console.log("Course name:", course.coursename);
// console.log("Course price:", course.price);
// console.log("Course Instructor:", course.courseInstructor);

//Object de-structure
const {courseInstructor: instructor} = course

console.log(instructor);//hitesh

//++++++++++ JSON API +++++++++++++++++

// {
//     "name": "aniket",
//     "coursename": "js",
//     "price": "free"
// }

