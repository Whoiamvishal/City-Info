const button = document.getElementById('search-button')

const input = document.getElementById('city-input')

const cityName = document.getElementById('City-Name');
const cityTime= document.getElementById('City-Time');
const cityTemp = document.getElementById('City-Temp');
const cityDate = document.getElementById('City-Date');


async function getData(cityName) {
   const promise = await fetch( `https://api.weatherapi.com/v1/current.json?key=3d2bad89b7b8441587a142254240111&q=$(cityname)&aqi=yes`

    )
    return await promise.json()
}

button.addEventListener("click", async () => {
 const value = input.value;
 const result = await getData(value);
 
cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`


    cityTime.innerText = result.location.localtime

cityTemp.innerText = result.current.temp_c

cityCondition.innerText = result.current.condition

})


//http://api.weatherapi.com/v1/current.json?key=3d2bad89b7b8441587a142254240111&q=London&aqi=yes
