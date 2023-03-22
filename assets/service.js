let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

fetch (urlApi)
.then((res)=> res.json())
.then((dataAPI) => {
    console.log(dataAPI);
})
.catch((error)=>console.log(error))