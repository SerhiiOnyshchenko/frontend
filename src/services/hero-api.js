const API_URL = 'https://backend-superheros.herokuapp.com/api/heros/';
const axios = require('axios').default;
axios.defaults.baseURL = API_URL;

export const getHeros = async (page = 1, limit = 5) => {
  try {
    const response = await axios.get(`?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroById = async heroId => {
  try {
    const response = await axios.get(`${heroId}`);
    return response.data.hero;
  } catch (error) {
    console.log(error);
  }
};

export const addHero = async formData => {
  try {
    const header = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await axios.post(``, formData, header);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateHero = async (heroId, formData) => {
  try {
    const header = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await axios.patch(`${heroId}`, formData, header);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHeros = async heroId => {
  try {
    await axios.delete(`${heroId}`);
  } catch (error) {
    console.log(error);
  }
};
