import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;


const getProducts = async () => {
  console.log(`${baseURL}/api/products`)
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
