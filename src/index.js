import './style/sample.css';
import { initializeApp } from './js/app.js';

// let fetchedCities = [];
// async function fetchCities(query) {
//   const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=10`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': 'f2b1580eadmsh72794b22ec1bd59p13f74bjsncb0e06c41b97',
//       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.data.map((city) => city.city));
//       const cities = data.data.map((city) => city.city);
//       fetchedCities = cities;
//       return cities;
//     } else {
//       console.error(`Error fetching cities: `, response.statusText);
//       return []; // Use the last valid data as a fallback
//     }
//   } catch (error) {
//     console.error(`Error fetching cities:`, error.message);
//     return []; // Use the last valid data as a fallback
//   }
// }

// function populateDropdown(cities) {
//   const dropdown = document.getElementById('city-dropdown');
//   dropdown.innerHTML = ''; // Clear the dropdown

//   if (Array.isArray(cities) && cities.length > 0) {
//     cities.forEach((city) => {
//       const option = document.createElement('li');
//       option.textContent = city;
//       option.classList.add('dropdown-item');
//       option.addEventListener('click', () => {
//         // Set input value when an option is clicked
//         document.getElementById('city-input').value = city;
//         // Clear the dropdown after selection
//         dropdown.innerHTML = '';
//       });
//       dropdown.appendChild(option);
//     });
//   } else {
//     const noCitiesOption = document.createElement('li');
//     noCitiesOption.textContent = 'No cities found';
//     dropdown.appendChild(noCitiesOption);
//   }
// }

// async function fetchCityImage(city, weatherCondition) {
//   console.log('fetching city image');
//   const accessKey = '3xySBFQtiakm7cerhNLIUF0jiobk6zRpYN1QrPxzpaM';
//   const query = `${city} ${weatherCondition}`;
//   const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=1`;

//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       if (data.results && data.results.length > 0) {
//         return data.results[0].urls.full; // URL of the first image
//       } else {
//         console.log('No images found for this query.');
//         return null;
//       }
//     } else {
//       console.error('Error fetching image: ', response.statusText);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching image: ', error.message);
//     return null;
//   }
// }

// function getInputFromUser() {
//   // Create the input element
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.placeholder = 'Enter city name';
//   input.id = 'city-input';
//   input.classList.add('city-input');
//   input.setAttribute('list', 'city-list'); // Link the input to the datalist

//   // Create the custom dropdown element
//   const dropdown = document.createElement('ul');
//   dropdown.id = 'city-dropdown';
//   dropdown.classList.add('dropdown');

//   // Append the input and button to the app container
//   const appContainer = document.getElementById('app');
//   appContainer.appendChild(input);
//   appContainer.appendChild(dropdown);

//   // Handle user input and filter cities
//   input.addEventListener('input', async () => {
//     const query = input.value.trim();
//     if (query.length > 2) {
//       const cities = await fetchCities(query);
//       populateDropdown(cities);
//     } else {
//       populateDropdown(fetchedCities); // keep showing the last fetched cities
//     }
//   });

//   // Create the button element
//   const button = document.createElement('button');
//   button.textContent = 'Get Weather';
//   button.id = 'get-weather-btn';
//   button.classList.add('get-weather-btn');
//   appContainer.appendChild(button);

//   // Add event listener to the button
//   button.addEventListener('click', async () => {
//     const city = document.getElementById('city-input').value;

//     if (fetchedCities.includes(city)) {
//       try {
//         const weatherData = await getWeather(city);
//         clearWeatherDisplay();
//         displayWeather(weatherData);

//         // Get the weather condition (e.g. "rainy", "sunny")
//         const weatherCondition =
//           weatherData.currentConditions.conditions.toLowerCase();
//         console.log(`THe weather conditions are ${weatherCondition}`);
//         // Fetch the image based on the city and weather condition
//         const cityImage = await fetchCityImage(city, weatherCondition);
//         displayCityImage(cityImage, city);
//       } catch (error) {
//         alert(`Couldn't fetch data. Please try again.`);
//       }
//     } else {
//       alert('Invalid city! Please select a valid city from the suggestions.');
//     }
//   });
// }

// async function getWeather(city) {
//   try {
//     const response = await fetch(
//       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GKBBMYEEE83UYMABCNJH8S5PJ&contentType=json`
//     );

//     if (response.status === 200) {
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } else {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Unable to fetch data:', error.message);
//     throw error;
//   }
// }

// function displayWeather(weatherData) {
//   console.log('Displaying weather...');
//   const appContainer = document.getElementById('app');

//   const backgroundImg = document.createElement('img');
//   backgroundImg.classList.add('background-img');
//   backgroundImg.alt = '';
//   backgroundImg.src = ''; // NEED TO GET THIS FROM AN API! RIGHT NOW!!

//   const weatherContainer = document.createElement('div');
//   weatherContainer.classList.add('weather-container');

//   const title = document.createElement('h1');
//   title.textContent = `The Weather in ${weatherData.address}`;
//   weatherContainer.appendChild(title);

//   const temp = document.createElement('p');
//   let temperatureDataInFahrenheit = Math.floor(
//     weatherData.currentConditions.temp * (9 / 5) + 32
//   );
//   temp.textContent = `The temperature is: ${temperatureDataInFahrenheit}°F`;
//   weatherContainer.appendChild(temp);

//   const description = document.createElement('p');
//   description.textContent = `Conditions: ${weatherData.currentConditions.conditions}`;
//   weatherContainer.appendChild(description);

//   appContainer.appendChild(weatherContainer);
// }

// function clearWeatherDisplay() {
//   const weatherContainer = document.querySelector('.weather-container');
//   if (weatherContainer) {
//     weatherContainer.remove();
//   }
// }

// function displayCityImage(imageUrl, city) {
//   console.log('displaying city image');
//   console.log(`image url is ${imageUrl}`);
//   const appContainer = document.getElementById('app');

//   if (!appContainer) {
//     console.error('App container not found');
//     return;
//   }

//   const existingImage = appContainer.querySelector('img');
//   if (existingImage) {
//     existingImage.remove();
//   }

//   // Apply the background image to the weather container
//   if (imageUrl) {
//     appContainer.style.backgroundImage = `url(${imageUrl})`;
//   } else {
//     const fallbackImageUrl = './images/rainyDefault.jpg';
//     appContainer.style.backgroundImage = `url(${fallbackImageUrl})`;
//   }

//   // Additional styling for better appearance
//   appContainer.style.backgroundSize = 'cover';
//   appContainer.style.backgroundPosition = 'center';
//   appContainer.style.color = 'white'; // Adjust text color for readability
//   appContainer.style.padding = '20px'; // Optional: Add padding for content
//   appContainer.style.borderRadius = '10px'; // Optional: Add border-radius for aesthetics
// }

// Initialize the app
// getInputFromUser();
console.log('Hello Webpack!');

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});
