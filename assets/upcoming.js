let eventUpcoming = [];
let template = ""

for (const event of data.events){
    if (event.date > data.currentDate) {
        eventUpcoming.push(event);
    }
}

for (const event of eventUpcoming) {
    template += `
    <div class="card" style="width: 17rem;">
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
}

let cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = template