let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '4700c7f2ae19913afbb08411442d568a'
let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const sensacionTermica = data.main.feels_like
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}ºC`

    const sensacionTermicaInfo = document.createElement('p')
    sensacionTermicaInfo.textContent = `La sensación térmica es: ${Math.floor(sensacionTermica-difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es del: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`    


    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(sensacionTermicaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

}

