async function loadVideoBackground(dayIcon) {
  const videoBackground = document.createElement('video');
  videoBackground.autoplay = true;
  videoBackground.loop = true;
  videoBackground.muted = true;
  videoBackground.playsInline = true;
  videoBackground.classList.add('weather-background');

  try {
    let videoModule;
    switch (dayIcon) {
      case 'rain':
        videoModule = await import('../videos/rainy-day.mp4');
        break;
      case 'snow':
        videoModule = await import('../videos/snowy-day.mp4');
        break;
      case 'fog':
        videoModule = await import('../videos/foggy-day.mp4');
        break;
      case 'wind':
        videoModule = await import('../videos/windy-day.mp4');
        break;
      case 'cloudy':
        videoModule = await import('../videos/cloudy-day.mp4');
        break;
      case 'partly-cloudy-day':
        videoModule = await import('../videos/partly-cloudy-day.mp4');
        break;
      case 'clear-day':
        videoModule = await import('../videos/clear-day.mp4');
        break;
      default:
        console.error(`No video for icon: ${dayIcon}`);
        return null;
    }

    videoBackground.src = videoModule.default; // Use the dynamically imported video file
    return videoBackground;
  } catch (error) {
    console.error(`Failed to load video for icon: ${dayIcon}`, error);
    return null;
  }
}

export async function displayWeather(weatherData) {
  const appContainer = document.getElementById('app');

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const title = document.createElement('h1');
  title.textContent = `The Weather in ${weatherData.resolvedAddress}`;
  title.classList.add('weather-title');
  appContainer.appendChild(title);

  const convertUnitsBtn = document.createElement('button');
  convertUnitsBtn.classList.add('convert-units-btn');
  convertUnitsBtn.textContent = 'convert to fahrenheit';
  appContainer.appendChild(convertUnitsBtn);

  for (let i = 0; i < 7; i++) {
    const day = weatherData.days[i];

    const weatherDayDiv = document.createElement('div');
    weatherDayDiv.classList.add('weather-day-div');

    // Format date into week, month, day
    const dateObject = new Date(day.datetime);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      dateObject
    );
    const weatherDate = document.createElement('p');
    weatherDate.classList.add('weather-date');
    weatherDate.textContent = formattedDate;
    weatherDayDiv.appendChild(weatherDate);

    console.log(day);

    const temp = document.createElement('p');
    temp.classList.add('weather-temperature');
    temp.textContent = `The average temperature is: ${day.temp}°C`;

    const tempMax = document.createElement('p');
    tempMax.classList.add('weather-temperature');
    tempMax.textContent = `The high temperature is: ${day.tempmax}°C;`;

    const tempMin = document.createElement('p');
    tempMin.classList.add('weather-temperature');
    tempMin.textContent = `The low temperature is: ${day.tempmin}°C;`;

    // Keep track of current temperature unit
    let isCelsius = true;
    convertUnitsBtn.addEventListener('click', () => {
      if (isCelsius) {
        // Average temp
        let avgTemp = convertToFahrenheit(day.temp);
        temp.textContent = `The average temperature is: ${avgTemp}°F`;

        // Max temp
        let maxTemp = convertToFahrenheit(day.tempmax);
        tempMax.textContent = `The high temperature is: ${maxTemp}°F`;

        // Min temp
        let minTemp = convertToFahrenheit(day.tempmin);
        tempMin.textContent = `The low temperature is: ${minTemp}°F`;

        convertUnitsBtn.textContent = 'convert to celsius';
      } else {
        temp.textContent = `The temperature is: ${day.temp}°C`;
        tempMax.textContent = `The high temperature is: ${day.tempmax}°C`;
        tempMin.textContent = `The low temperature is: ${day.tempmin}°C`;

        convertUnitsBtn.textContent = 'Convert to Fahrenheit';
      }

      isCelsius = !isCelsius;
    });

    const description = document.createElement('p');
    description.classList.add('weather-description');
    description.textContent = `Conditions: ${day.conditions}`;

    const videoBackground = await loadVideoBackground(day.icon);
    if (videoBackground) {
      weatherDayDiv.appendChild(videoBackground);
    }

    weatherDayDiv.appendChild(description);
    weatherDayDiv.appendChild(temp);
    weatherDayDiv.appendChild(tempMax);
    weatherDayDiv.appendChild(tempMin);
    weatherContainer.appendChild(weatherDayDiv);
  }

  appContainer.appendChild(weatherContainer);
}

function convertToFahrenheit(dayTemp) {
  let temperatureDataInFahrenheit = Math.floor(dayTemp * (9 / 5) + 32);

  return temperatureDataInFahrenheit;
}

export function clearWeatherDisplay() {
  const weatherContainer = document.querySelector('.weather-container');
  const weatherContainerTitle = document.querySelector('.weather-title');
  const convertUnitsBtn = document.querySelector('.convert-units-btn');
  if (weatherContainer) {
    weatherContainer.remove();
    weatherContainerTitle.remove();
    convertUnitsBtn.remove();
  }
}

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
