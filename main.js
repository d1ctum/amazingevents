/* card 

<div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
       
        
    switch

    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>        
        
*/

// Constantes capturadas y variables
const contenedor = document.getElementById('contenedor')
const contenedorChecks = document.getElementById('checkContainer')
const input = document.querySelector('input')

// Eventos

//Antes
/* input.addEventListener('input',()=>{
    let arrayFiltrado1 = filtrarPorTexto(people, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
})

contenedorChecks.addEventListener('change',()=>{
    let arrayFiltrado1 = filtrarPorTexto(people, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
}) */

//Despues

input.addEventListener('input',superFiltro)

contenedorChecks.addEventListener('change',superFiltro)

// Llamadas de funciones

pintarTarjetas(people)
crearCheckboxes(people)


// Funciones

function superFiltro(){
    let arrayFiltrado1 = filtrarPorTexto(people, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
}

function crearCheckboxes(arrayInfo){
    let checks = ''
    let paisesRepetidos = arrayInfo.map(elemento => elemento.country)
    let paises = new Set(paisesRepetidos.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    paises.forEach(elemento =>{
        checks += `<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${elemento}" value="${elemento}">
        <label class="form-check-label" for="${elemento}">${elemento}</label>
      </div>`
    })
    contenedorChecks.innerHTML = checks
}

function pintarTarjetas(arrayDatos) {
    if(arrayDatos.length == 0){
        contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
        return
    }
    let tarjetas = ''
    arrayDatos.forEach(elemento => {
        tarjetas += `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">${elemento.email}</div>
                        <div class="card-body">
                            <h5 class="card-title">${elemento.name}</h5>
                            <p class="card-text">${elemento.text}</p>
                            <p class="card-text text-danger text-end fw-bolder">${elemento.country}</p>
                        </div>
                    </div>`
    })
    contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarPorPais(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    console.log(arrayChecks);
    let checksChecked = arrayChecks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return arrayInfo
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.country))
    console.log(arrayFiltrado);
    return arrayFiltrado
}




/* function panadero(ingredientes){
    return bizcochuelo(ingredientes)
}

function decorador(bizcochuelo){
    return pastel(bizcochuelo)
}

function vendedor(pastel){
    console.log('Se vende '+pastel);
}


panaderia.addEventListener('vender',()=>{
    let bizcochuelo = panadero(leche,huevo,harina,etc)
    let pastel = decorador(bizcochuelo)
    vendedor(pastel)
}) */