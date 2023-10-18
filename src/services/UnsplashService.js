
import { API_KEY , API_URL } from '../utils/constants';


const UnsplashService = {

  fetchPhotos: async (query , page, perPage = 9) => {
    try {
      const response = await fetch(
        `${API_URL}/search/photos?query=${query}&page=${page}&per_page=${perPage}`,
        
        {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      // console.log(data.results);
      return data;

    } catch (error) {
      throw new Error('Failed to fetch photos from Unsplash API');
    }
  },
};

export default UnsplashService;
