export function displayWeather(weatherData) {
  console.log('Displaying weather...');
  const appContainer = document.getElementById('app');

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const title = document.createElement('h1');
  title.textContent = `The Weather in ${weatherData.address}`;
  title.classList.add('weather-title');
  appContainer.appendChild(title);

  console.log('printing days');
  console.log(weatherData.days);
  for (let i = 0; i < 7; i++) {
    const day = weatherData.days[i];
    console.log(day.datetime);
    console.log(day.tempmax);
    console.log(day.tempmin);

    const weatherDayDiv = document.createElement('div');
    weatherDayDiv.classList.add('weather-day-div');

    const weatherDate = document.createElement('p');
    weatherDate.classList.add('weather-date');
    weatherDate.textContent = day.datetime;
    weatherDayDiv.appendChild(weatherDate);

    const convertUnitsBtn = document.createElement('button');
    convertUnitsBtn.textContent = 'convert to fahrenheit';
    weatherDayDiv.appendChild(convertUnitsBtn);

    const temp = document.createElement('p');
    temp.textContent = `The temperature is: ${day.temp}°C`;

    // Keep track of current temperature unit
    let isCelsius = true;
    convertUnitsBtn.addEventListener('click', () => {
      if (isCelsius) {
        let temperatureDataInFahrenheit = Math.floor(day.temp * (9 / 5) + 32);
        temp.textContent = `The temperature is: ${temperatureDataInFahrenheit}°F`;
        convertUnitsBtn.textContent = 'convert to celsius';
      } else {
        temp.textContent = `The temperature is: ${day.temp}°C`;
        convertUnitsBtn.textContent = 'convert to fahrenheit';
      }

      isCelsius = !isCelsius;
    });

    const description = document.createElement('p');
    description.textContent = `Conditions: ${day.conditions}`;

    weatherDayDiv.appendChild(description);
    weatherDayDiv.appendChild(temp);
    weatherContainer.appendChild(weatherDayDiv);
  }

  appContainer.appendChild(weatherContainer);
}

export function clearWeatherDisplay() {
  const weatherContainer = document.querySelector('.weather-container');
  const weatherContainerTitle = document.querySelector('.weather-title');
  if (weatherContainer) {
    weatherContainer.remove();
    weatherContainerTitle.remove();
  }
}

// export function displayCityImage(imageUrl) {
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
//   const weatherImageDiv = document.createElement('div');
//   weatherImageDiv.classList.add('weather-image-div');

//   const imgDiv = document.createElement('img');
//   imgDiv.classList.add('weather-image');

//   if (imageUrl) {
//     imgDiv.src = imageUrl;
//     imgDiv.alt = 'weather image';

//     weatherImageDiv.appendChild(imgDiv);

//     appContainer.appendChild(weatherImageDiv);
//   } else {
//     const fallbackImageUrl = './images/rainyDefault.jpg';
//     imgDiv.src = fallbackImageUrl;
//     imgDiv.alt = 'fallback image';
//   }
// }

export function populateDropdown(cities) {
  const dropdown = document.getElementById('city-dropdown');
  const inputField = document.getElementById('city-input');
  dropdown.innerHTML = ''; // Clear the dropdown

  if (Array.isArray(cities) && cities.length > 0) {
    cities.forEach((city) => {
      const option = document.createElement('li');
      option.textContent = `${city.city}, ${city.state}`;
      option.classList.add('dropdown-item');
      option.addEventListener('click', () => {
        // Set input value when an option is clicked
        inputField.value = city.city;
        // Clear the dropdown after selection
        dropdown.innerHTML = '';
      });
      dropdown.appendChild(option);
    });
  } else {
    const noCitiesOption = document.createElement('li');
    noCitiesOption.textContent = 'No cities found';
    dropdown.appendChild(noCitiesOption);
  }

  // Close dropdown if user clicks outside of input or dropdown
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && event.target !== inputField) {
      dropdown.innerHTML = ''; // Clear the dropdown if click is outside
    }
  });

  // Prevent closing dropdown when clicking inside the input or dropdown
  inputField.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent document click from triggering
  });
}
