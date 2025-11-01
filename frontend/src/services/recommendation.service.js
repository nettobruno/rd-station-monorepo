const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products
) => {
  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType } = formData;

  const filterPreferences = products.filter(product => product.preferences?.some(item => selectedPreferences.includes(item)))
  const filterFeatures = products.filter(product => product.features?.some(item => selectedFeatures.includes(item)))

  const uniqueFilter = [...filterFeatures, ...filterPreferences].filter(
    (product, index, self) => index === self.findIndex(p => p.id === product.id)
  );

  if(selectedRecommendationType === 'MultipleProducts') return uniqueFilter

  return uniqueFilter.slice(-1)

};

export default { getRecommendations };
