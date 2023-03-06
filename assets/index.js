
let cardContainer = document.getElementById('cardContainer')

console.log(cardContainer)

let template = ""
let dataName = [];
let dataDesc = [];
let dataPrice = [];
let dataImgSrc = [];

for (let i = 0; i < data.events.length; i++) {
    dataName.push(data.events[i]['name'])
}


for (let i = 0; i < data.events.length; i++) {
    dataDesc.push(data.events[i]['description'])
}


for (let i = 0; i < data.events.length; i++ ) {
    dataPrice.push(data.events[i]["price"])
}


for (let i = 0; i < data.events.length; i++) {
    dataImgSrc.push(data.events[i]["image"])
}

for (const eventName of dataName) {
    template += `
    <div class="card" style="width: 17rem;">
        <img src="" class="p-3 img-item" alt="..."></img>
            <div class="card-body text-center">
                <h5 class="card-title">${eventName}</h5>
                <p class="card-text"></p>
                <div class="d-flex flex-row justify-content-around text-">
                    <p class="card-text"></p>
                    <a href="./details.html" class="btn btn-outline-secondary">Ver más</a>
                </div>
            </div>
    </div>
    `
}

console.log(dataDesc)
console.log(dataName)
console.log(dataPrice)
console.log(dataImgSrc)