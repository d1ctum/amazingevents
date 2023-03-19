let cardContainer = document.getElementById('cardContainer')

// for (const event of data.events) {
//     template += `
//     <div class="card" id="card-template">
//         <img src="${event.image}" class="p-3 img-item" alt="..."></img>
//             <div class="card-body text-center">
//                 <h5 class="card-title">${event.name}</h5>
//                 <p class="card-text eventDesc">${event.description}</p>
//                 <div class="d-flex flex-row justify-content-around text-">
//                     <p class="card-text">$${event.price}</p>
//                     <a href="./details.html?id=${event.id}" class="btn btn-outline-secondary">Ver más</a>
//                 </div>
//             </div>
//     </div>
//     `
// }

// cardContainer.innerHTML = template

// input filtro

const searchInput = document.querySelector("#search-bar")
const checkContainer = document.getElementById("categories")

searchInput.addEventListener("input", inputFiltered)

function inputFiltered(text){
    let arrayFiltered = data.events.filter(event => event.name.toLocaleLowerCase().includes(text.toLowerCase()))
    return arrayFiltered
}

function paintCards(dataArray){
    if(data.events.length == 0){

    }
    let template = ""
    data.events.forEach(event => {
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
    })
    cardContainer.innerHTML = template
}

paintCards()