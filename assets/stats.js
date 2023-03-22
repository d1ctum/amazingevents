let percentagesArray = [];
let eventPercentage


function getPercentagesofAttendance(){
    data.events.forEach(event => {
        let eventPercentage = 100 * event.assistance / event.capacity;
        if (event.date < data.currentDate) {
                percentagesArray.push(eventPercentage.toFixed(2))
            }
    })
}

getPercentagesofAttendance();


let highestPercentageOfAttendance = percentagesArray.sort((a,b)=> a - b).reverse()[0];
let lowestPercentageOfAttendance = percentagesArray.sort((a,b)=> a - b)[0];

let highestPercentageOfAttendanceContainer = document.getElementById("highestAttendance")
highestPercentageOfAttendanceContainer.innerHTML = highestPercentageOfAttendance + "%"

let lowestPercentageOfAttendanceContainer = document.getElementById("lowestAttendance")
lowestPercentageOfAttendanceContainer.innerHTML = lowestPercentageOfAttendance + "%"

// percentagesArray.push(eventPercentage)
// for (let event of data.events){
    //     if (event.date < data.currentDate){
        //         });
        // }}
        // data.events.forEach(event => {
        //     let eventPercentage = 100 * event.assistance / event.capacity;
        //     for (let event of data.events){
        //         if (event.date > data.currentDate){
        //             percentagesArray.push(eventPercentage);
        //         }
        //     }
        //     return percentagesArray;