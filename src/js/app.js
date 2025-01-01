import { getWeather } from './weatherAPI.js';
import { fetchCities, fetchedCities } from './cityAPI.js';
import { populateDropdown, clearWeatherDisplay, displayWeather } from './ui.js';

export function initializeApp() {
  const appContainer = document.getElementById('app');

  const inputSection = document.createElement('div');
  inputSection.classList.add('input-section');

  const input = createInputField(inputSection);
  createDropdown(inputSection);
  const button = createSearchButton(inputSection);

  appContainer.appendChild(inputSection);

  input.addEventListener('input', async () => {
    const query = input.value.trim();
    if (query.length > 1) {
      const cities = await fetchCities(query);
      populateDropdown(cities);
    }
  });

  // Add event listener to the button
  button.addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;

    if (fetchedCities.includes(city) || city.value !== '') {
      try {
        const weatherData = await getWeather(city);
        clearWeatherDisplay();
        displayWeather(weatherData);
      } catch (error) {
        alert(`Couldn't fetch data. Please try again. ERROR: ${error}`);
      }
    } else {
      alert('Invalid city! Please select a valid city from the suggestions.');
    }
  });
}

function createInputField(appContainer) {
  // Create the input element
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter a city name (e.g., Chicago, IL)';
  input.id = 'city-input';
  input.classList.add('city-input');
  input.setAttribute('list', 'city-list'); // Link the input to the datalist

  appContainer.appendChild(input);

  return input;
}

function createDropdown(appContainer) {
  // Create the custom dropdown element
  const dropdown = document.createElement('ul');
  dropdown.id = 'city-dropdown';
  dropdown.classList.add('dropdown');

  appContainer.appendChild(dropdown);

  return dropdown;
}

function createSearchButton(appContainer) {
  // Create the button element
  const button = document.createElement('button');
  button.textContent = 'Get Weather';
  button.id = 'get-weather-btn';
  button.classList.add('get-weather-btn');

  appContainer.appendChild(button);
  return button;
}
