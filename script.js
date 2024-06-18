// script.js

function showDropdown() {
    var dropdownPage = document.getElementById('dropdownPage');
    dropdownPage.style.display = 'block';
    var element = document.getElementById('header');
    element.classList.add('overlay');
}

function hideDropdown() {
    var dropdownPage = document.getElementById('dropdownPage');
    dropdownPage.style.display = 'none';
    var element=document.getElementById('header');
    element.classList.remove('overlay');
}
// var cityname="";
// var hoverDiv=document.getElementById('detect-location');
// hoverDiv.addEventListener('click',function(event){
//     fetchLocationData();
//     console.log(cityname);
//     alert(`your city is ${cityname}`);
// });
// function fetchLocationData() {
//     fetch('https://ipinfo.io/json?token=cfbdbbf910c70e')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Log the full data object for reference
//             const city = data.city; // Extract the city name from the response
//             console.log("City: " + city);
//             cityname+=city;
//             // console.log("cintyname:"+cityname);
//             // Display the city name on the webpage
//             // document.getElementById('cityName').textContent = city;
//         })
//         .catch(error => {
//             console.error('Error fetching location:', error);
//         });
// }
var cityname = ""; // Global variable to store city name

var hoverDiv = document.getElementById('detect-location');
hoverDiv.addEventListener('click', function(event) {
    fetchLocationData()
        .then(city => {
            console.log(city); // This should now log the city name correctly
            alert(`Your city is ${city}`);
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
});

function fetchLocationData() {
    return fetch('https://ipinfo.io/json?token=cfbdbbf910c70e')
        .then(response => response.json())
        .then(data => {
            const city = data.city; // Extract the city name from the response
            cityname = city; // Update the global variable with city name
            return city; // Return the city name to propagate through the promise chain
        });
}

