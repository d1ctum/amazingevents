let percentagesArray = [];
let capacitiesArray = [];
let revenuesArray = [];


function getPercentagesofAttendance(){
    data.events.forEach(event => {
        let eventPercentage = 100 * event.assistance / event.capacity;
        if (event.date < data.currentDate) {
                percentagesArray.push(eventPercentage.toFixed(2))
            }
    })
}

function getCapacity(){
    data.events.forEach(event =>  {
        let eventsCapacities = event.capacity
        capacitiesArray.push(eventsCapacities)
    })
}

function getRevenues(){
    data.events.forEach(event => {
        let eventRevenues = event.assistance * event.price
        
    })
}

getPercentagesofAttendance();
getCapacity()

let highestPercentageOfAttendance = percentagesArray.sort((a,b)=> a - b).reverse()[0];
let lowestPercentageOfAttendance = percentagesArray.sort((a,b)=> a - b)[0];
let largestCapacity = capacitiesArray.sort((a,b)=> a - b).reverse()[0];

let highestPercentageOfAttendanceContainer = document.getElementById("highestAttendance")
highestPercentageOfAttendanceContainer.innerHTML = "Metallica in Concert " + highestPercentageOfAttendance + "%"

let lowestPercentageOfAttendanceContainer = document.getElementById("lowestAttendance")
lowestPercentageOfAttendanceContainer.innerHTML = "Jurassic Park " + lowestPercentageOfAttendance + "%"

let largestCapacityContainer = document.getElementById("largestCapacity")
largestCapacityContainer.innerHTML = "15K NY " + largestCapacity








// let largerCapacity = 