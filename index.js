const arr = ["Soanli", "Komal", "Gulshan", "Bhavesh"];
const expectedSortedItems = [...arr].sort((a, b) => b.localeCompare(a));

// const newArr = [...arr]

// console.log(...arr)

// function greetings( ...arr ){
//     console.log(arr)
//     for( let i = 0 ; i < arr.length ; i++ ){
//         console.log("Good Morning ", arr[i])
//     }
// }

// greetings(...arr)

// let name = "Bhavesh" // array of letters

// console.log( name[1] )



let name = [1,2,3,4,324,314,123]
let newName = name //shallow copy
let latestName = JSON.parse(JSON.stringify(name)) //deep copy
let names = [...name]

name.sort((a, b) => a-b);

// console.log(JSON.stringify(["Bhavesh", 123, {state : "Maharashtra"}])) //convert arrays and object into full string
// console.log(JSON.parse(`["Bhavesh",123,{"state":"Maharashtra"}]`)) // convert string into arrays and object

console.log(name)
console.log(names)