let percentagesArray = [];
let capacitiesArray = [];
let revenuesArray = [];


// function getPercentagesofAttendance() {
//     data.events.forEach(event => {
//         let eventPercentage = 100 * event.assistance / event.capacity;
//         if (event.date < data.currentDate) {
//             percentagesArray.push(eventPercentage.toFixed(2))
//         }
//     })
// }

// function getCapacity() {
//     data.events.forEach(event => {
//         let eventsCapacities = event.capacity
//         capacitiesArray.push(eventsCapacities)
//     })
// }

// function getRevenues() {
//     data.events.forEach(event => {
//         let eventRevenues = event.assistance * event.price

//     })
// }

// getPercentagesofAttendance();
// getCapacity()

// let highestPercentageOfAttendance = percentagesArray.sort((a, b) => a - b).reverse()[0];
// let lowestPercentageOfAttendance = percentagesArray.sort((a, b) => a - b)[0];
// let largestCapacity = capacitiesArray.sort((a, b) => a - b).reverse()[0];

// let highestPercentageOfAttendanceContainer = document.getElementById("highestAttendance")
// highestPercentageOfAttendanceContainer.innerHTML = "Metallica in Concert " + highestPercentageOfAttendance + "%"

// let lowestPercentageOfAttendanceContainer = document.getElementById("lowestAttendance")
// lowestPercentageOfAttendanceContainer.innerHTML = "Jurassic Park " + lowestPercentageOfAttendance + "%"

// let largestCapacityContainer = document.getElementById("largestCapacity")
// largestCapacityContainer.innerHTML = "15K NY " + largestCapacity

async function getData() {
    try {
        const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        let eventsObj = await response.json();
        let eventsArray = eventsObj.events;

        let eventsSections = `
        <tr class="tr text-center">
            <td>Event with the highest percentage of attendance</td>
            <td>Event with the lowest percentage of attendance</td>
            <td>Event with larger capacity</td>
        </tr>
        `
        let upcomingEvents = `
        <tr class="tr text-center table table-info table-bordered">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let pastEvents = `
        <tr class="tr text-center">
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of attendance</td>
        </tr>`
        let upcomingByCategory = {}
        let pastByCategory = {}
        let maxAttendance = { "eventname": "", "attendance": -Infinity }
        let minAttendance = { "eventname": "", "attendance": +Infinity }
        let maxCapacity = { "eventname": "", "capacity": -Infinity }

        eventsArray.forEach(event => {

            if (event.hasOwnProperty("assistance")) {

                let attendance = (event.assistance * 100) / event.capacity
                let revenue = event.assistance * event.price

                if (attendance >= maxAttendance["attendance"]) {

                    maxAttendance["eventname"] = event.name
                    maxAttendance["attendance"] = attendance.toFixed(2)

                };

                if (attendance <= minAttendance["attendance"]) {

                    minAttendance["eventname"] = event.name
                    minAttendance["attendance"] = attendance.toFixed(2)

                };



                if (pastByCategory.hasOwnProperty(event.category)) {

                    pastByCategory[event.category]["revenue"] += revenue
                    pastByCategory[event.category]["attendance"] += attendance
                    pastByCategory[event.category]["quantity"] += 1

                } else {

                    pastByCategory[event.category] = { "revenue": revenue, "attendance": attendance, "quantity": 1 }

                };

            };

            if (event.hasOwnProperty("estimate")) {

                let attendance = ((event.estimate * 100) / event.capacity)
                let revenue = event.estimate * event.price

                if (upcomingByCategory.hasOwnProperty(event.category)) {

                    upcomingByCategory[event.category]["revenue"] += revenue
                    upcomingByCategory[event.category]["attendance"] += attendance
                    upcomingByCategory[event.category]["quantity"] += 1

                } else {

                    upcomingByCategory[event.category] = { "revenue": revenue, "attendance": attendance, "quantity": 1 }

                };

            };

            if (event.capacity > maxCapacity["capacity"]) {

                maxCapacity["eventname"] = event.name
                maxCapacity["capacity"] = event.capacity

            };

        });

        Object.keys(upcomingByCategory).forEach(category => {

            upcomingEvents += `
            <tr class="tr-content text-center">
                <td>${category}</td>
                <td>${upcomingByCategory[category]["revenue"]}</td>
                <td>${(upcomingByCategory[category]["attendance"] / upcomingByCategory[category]["quantity"]).toFixed(2)} %</td>
            </tr>
            `;

        });

        Object.keys(pastByCategory).forEach(category => {

            pastEvents += `
            <tr class="tr-content text-center">
                <td>${category}</td>
                <td>${pastByCategory[category]["revenue"]}</td>
                <td>${(pastByCategory[category]["attendance"] / pastByCategory[category]["quantity"]).toFixed(2)} %</td>
            </tr>
            `;

        });

        eventsSections += `
        <tr class="tr-content text-center">
            <td>${maxAttendance["eventname"]} ${maxAttendance["attendance"]} %</td>
            <td>${minAttendance["eventname"]} ${minAttendance["attendance"]} %</td>
            <td>${maxCapacity["eventname"]} ${maxCapacity["capacity"]}</td>
        </tr>
        `;

        document.getElementById("stats-container-eventSection").innerHTML = eventsSections
        document.getElementById("stats-container-upcomingEvents").innerHTML = upcomingEvents
        document.getElementById("stats-container-pastEvents").innerHTML = pastEvents


    } catch (error) {
        console.log(error)
    }
}

getData()






// let largerCapacity = 