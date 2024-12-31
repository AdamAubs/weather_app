export let fetchedCities = [];
export async function fetchCities(query) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=10`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f2b1580eadmsh72794b22ec1bd59p13f74bjsncb0e06c41b97',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      // create a set to track unique city-state pairs
      const cityStateSet = new Set();
      //   console.log(data.data);
      //   console.log(data.data.map((city) => city.city));
      //   console.log(data.data.map((city) => city.region));
      const uniqueCities = data.data
        .filter((city) => {
          const cityState = `${city.city}, ${city.region}`;
          if (!cityStateSet.has(cityState)) {
            cityStateSet.add(cityState);
            return true;
          }
          return false;
        })
        .map((city) => ({
          city: city.city,
          state: city.region,
        }));
      console.log(uniqueCities.map((cities) => cities.city));
      fetchedCities = uniqueCities.map((cities) => cities.city);
      return uniqueCities;
    } else {
      console.error('Error fetching cities: ', response.statusText);
      return []; // Use the last valid data as a fallback
    }
  } catch (error) {
    console.error('Error fetching cities:', error.message);
    return []; // Use the last valid data as a fallback
  }
}
