
let cardContainer = document.getElementById('cardContainer')

let template = ""

for (const event of data.events) {
    template += `
    <div class="card" style="width: 17rem;">
        <img src="${event.image}" class="p-3 img-item" alt="..."></img>
            <div class="card-body text-center">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text eventDesc">${event.description}</p>
                <div class="d-flex flex-row justify-content-around text-">
                    <p class="card-text">$${event.price}</p>
                    <a href="./details.html" class="btn btn-outline-secondary">Ver más</a>
                </div>
            </div>
    </div>
    `
}

cardContainer.innerHTML = template