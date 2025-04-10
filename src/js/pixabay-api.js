import axios from 'axios';

async function fetchData(query, page = 1) {
  const params = {
    key: '49512194-f753c2f34a7e7dbbd609db53f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };
  return await axios.get('https://pixabay.com/api/', { params });
}

export default fetchData;
