export async function fetchCityImage(city, weatherCondition) {
  console.log('fetching city image');
  const accessKey = '3xySBFQtiakm7cerhNLIUF0jiobk6zRpYN1QrPxzpaM';
  const query = `${city} ${weatherCondition}`;
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=1`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls.full; // URL of the first image
      } else {
        console.log('No images found for this query.');
        return null;
      }
    } else {
      console.error('Error fetching image: ', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image: ', error.message);
    return null;
  }
}
