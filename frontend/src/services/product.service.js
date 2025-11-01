import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001"; 

const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
