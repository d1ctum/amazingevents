// const queryString = location.search

// const params = new URLSearchParams(queryString)

// const id = params.get('_id')

// const eventDetails = data.events.find( events => events.id == id)

// const div = document.querySelector('#pag-body')

// div.innerHTML = ` <div class="card mb-3" style="max-width: 150rem;">
//     <div class="row g-0">
//       <div class="col-md-4 p-5">
//         <img src="${eventDetails.image}" class="img-fluid rounded-start" id="imgdetails" alt="...">
//       </div>
//       <div class="col-md-8 p-5">
//         <div class="card-body text-center border border-danger-subtle border-2 ps-5">
//           <h5 class="card-title">${eventDetails.name}</h5>
//           <p class="card-text">${eventDetails.date}</p>
//           <p class="card-text">${eventDetails.description}</p>
//           <p class="card-text">${eventDetails.category}</p>
//           <p class="card-text">$${eventDetails.price}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>`

async function getData() {
  try {
      const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
      let eventsObj = await response.json();
      let eventsArray = eventsObj.events;
      const queryString = window.location.search
      const params = new URLSearchParams(queryString)
      const id = params.get('id')
      const eventDetails = eventsArray.find( events => events._id == id)
      const div = document.querySelector('#pag-body')
      detailsCreate(eventDetails);
      console.log(eventsArray)
      console.log(id)

      function detailsCreate(eventDetails) {
        {
         div.innerHTML = ` <div class="card mb-3" style="max-width: 150rem;">
           <div class="row g-0 d-flex flex-column" id="detailsContainer">
             <div class="pt-5">
               <img src="${eventDetails.image}" class="img-fluid rounded-start rounded-end" id="imgdetails" alt="...">
             </div>
             <div class="col-md-8 pt-5 pb-5">
               <div class="card-body text-center border border-danger-subtle border-2 ps-5">
                 <h5 class="card-title">${eventDetails.name}</h5>
                 <p class="card-text">${eventDetails.date}</p>
                 <p class="card-text">${eventDetails.description}</p>
                 <p class="card-text">${eventDetails.category}</p>
                 <p class="card-text">$${eventDetails.price}</p>
               </div>
             </div>
           </div>
         </div>`
       };
   }


  } catch (error) {
      console.log(error)
  }
}
getData()