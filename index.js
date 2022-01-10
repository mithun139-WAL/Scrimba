// document.getElementById("count").innerText = 5
//1.First JS variable
// let count = 0

// console.log(count)


// console.log(myAge)

// 1. Create a variable, myAge, and set its value to your age
// let myAge = 35

// 2. Log the myAge variable to the console
// console.log(myAge)

// document.getElementById("count").innerText = 5

//2.Basic mathematical Operationsa
// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

//Reassigning and incrementing

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//Adding a button

//Onclick event listener

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }

//Using functions to write less code

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// Setting up the the race 🏎 🏎 🏎

// countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// countdown()

//First function

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myLogger() {
//     console.log(42)
// }

// myLogger()

//A function that logs the sum

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

//A function that increments

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

//Increment on clicks


// change the count-el in the HTML to reflect the new count

// let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
// }

//Display the count
//Document Object Model
let countEl = document.getElementById("count-el") 

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

//Create the save button


// function save() {
//     console.log(count)
// }

//First string variable 

// let username = "per"
// let message = "You have tree new notifications"
// console.log(message + ", " + username + "!")
// Create a variable, messageToUser, that contains the message we have logged


//Log a greeting to the console
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Per Harald Borgen"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

//Strings vs Numbers

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(4 + 5) // 
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

//Render a welcome message

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

//Improve the message with string concatenation

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText +"👋"

//Use plus equal for count



let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


//Create the save feature

let saveEl = document.getElementById("save-el")
// function save() {
//     let countStr = count + " - "
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

//Debugging oNLINE

//Set the count to 0

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}