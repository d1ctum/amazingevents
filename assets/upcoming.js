let eventUpcoming = [];
let cardContainer = document.getElementById('cardContainer')
const searchInput = document.getElementById("search-bar")
const checkContainer = document.getElementById("categories")

async function getData() {
    try {
        const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        let eventsObj = await response.json();
        let eventsArray = eventsObj.events;
        searchInput.addEventListener("keyup", () => filteredCardsCreate(inputFiltered(eventsArray, searchInput.value)));
        checkContainer.addEventListener("change", () => generalFilter(eventsArray));
        checkboxes(eventsArray);
        cardsCreate(eventsArray);

        function cardsCreate(array) {
            let template = ""
            array.forEach(event => {
                if (event.date > eventsObj.currentDate) {
                template += `
                <div class="card" id="card-template" style="max-width: 17rem">
                    <img src="${event.image}" class="p-3 img-item" alt="..."></img>
                        <div class="card-body text-center">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text eventDesc">${event.description}</p>
                            <div class="d-flex flex-row justify-content-around text-">
                                <p class="card-text">$${event.price}</p>
                                <a href="./details.html?id=${event.id}" class="btn btn-outline-secondary">Ver más</a>
                            </div>
                        </div>
                </div>
                `
            }});
            cardContainer.innerHTML = template
        }

        function filteredCardsCreate(array) {
            if (array.length == 0) {
                cardContainer.innerHTML = "<h1>No se encontraron resultados.</h1>";
            }
            let template = ""
            array.forEach(event => {
                template += `
                <div class="card" id="card-template" style="max-width: 17rem">
                    <img src="${event.image}" class="p-3 img-item" alt="..."></img>
                        <div class="card-body text-center">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text eventDesc">${event.description}</p>
                            <div class="d-flex flex-row justify-content-around text-">
                                <p class="card-text">$${event.price}</p>
                                <a href="./details.html?id=${event.id}" class="btn btn-outline-secondary">Ver más</a>
                            </div>
                        </div>
                </div>
                `
            });
            cardContainer.innerHTML = template
        }

        function checkboxes(array) {
            let categoriesContainer = ""
            let categories = array.map(event => event.category)
            let categoriesF = new Set(categories.sort((a, b) => {
                if (a > b) {
                    return 1
                }
                if (a < b) {
                    return -1
                }
                return 0
            }))
            categoriesF.forEach(event => {
                categoriesContainer += `
                <div class="d-flex flex-row gap-4" id="categories">
                    <input type="checkbox" name="checkbox" id="${event}" value="${event}">
                    <label for="${event}">${event}</label>
                </div>
                `
            })
            checkContainer.innerHTML = categoriesContainer
        }

        function categoryFilter(array){
            let checkboxes = document.querySelectorAll("input[type=checkbox]")
            let arrayCheck = Array.from(checkboxes)
            let checkChecked = arrayCheck.filter(event => event.checked)
            if (checkChecked.length == 0) {
                return eventsObj
            }
            let checkValues = checkChecked.map(check => check.value)
            let filteredArray = eventsArray.filter(event => checkValues.includes(event.category))
            return filteredArray
        }

        function inputFiltered(array, text) {
            let filteredArray = array.filter(event => event.name.toLowerCase().includes(text))
            return filteredArray
        }

        function generalFilter() {
            let filteredArray1 = inputFiltered(eventsArray, searchInput.value)
            let filteredArray2 = categoryFilter(filteredArray1)
            cardsCreate(filteredArray2)
        }

    } catch (error) {
        console.log(error)
    }
}

getData()