export async function getWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GKBBMYEEE83UYMABCNJH8S5PJ&contentType=json`;
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Unable to fetch data:', error.message);
    throw error;
  }
}
