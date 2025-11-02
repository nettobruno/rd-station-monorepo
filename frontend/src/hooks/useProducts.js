import { useEffect, useState } from 'react';
import getProducts from '../services/product.service';

const useProducts = () => {
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        setProducts(products);

        products.forEach((product) => {
          const productPreferences = product.preferences
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allPreferences.push(...productPreferences);

          const productFeatures = product.features
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allFeatures.push(...productFeatures);
        });

        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (err) {
        console.error('Erro ao obter os produtos:', err);
        setError('Erro ao carregar produtos. Tente novamente mais tarde.');
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products, error };
};

export default useProducts;
