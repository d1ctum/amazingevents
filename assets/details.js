const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const eventDetails = data.events.find( events => events.id == id)

console.log(eventDetails)

const div = document.querySelector('#pag-body')

div.innerHTML = ` <div class="card mb-3" style="max-width: 150rem;">
    <div class="row g-0">
      <div class="col-md-4 p-5">
        <img src="${eventDetails.image}" class="img-fluid rounded-start" id="imgdetails" alt="...">
      </div>
      <div class="col-md-8 p-5">
        <div class="card-body text-center border border-danger-subtle border-2 ps-5">
          <h5 class="card-title">${eventDetails.name}</h5>
          <p class="card-text">${eventDetails.date}</p>
          <p class="card-text">${eventDetails.description}</p>
          <p class="card-text">${eventDetails.category}</p>
          <p class="card-text">$${eventDetails.price}</p>
        </div>
      </div>
    </div>
  </div>
</section>`