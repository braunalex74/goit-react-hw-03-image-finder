import axios from 'axios';

const API_KEY = '35196803-673541e2c14d14661bda49ca7';

export const fetchImages = async (searchQuery, currentPage, perPage = 12) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&per_page=${perPage}`
    );
    return response.data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};
