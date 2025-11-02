import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences, features, products, error } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    if (onRecommendationsChange) {
      onRecommendationsChange(dataRecommendations);
    }
  };

  if (error) {
    return (
      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        {error}
      </div>
    );
  }

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-100 space-y-6 text-gray-700"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-[#11A7B6] text-center mb-4">
        Escolha suas preferências
      </h2>

      <div className="space-y-5">
        <div className="p-4 bg-[#F9FAFB] rounded-lg border border-gray-200 hover:border-[#11A7B6] transition">
          <Preferences
            preferences={preferences}
            onPreferenceChange={(selected) =>
              handleChange('selectedPreferences', selected)
            }
          />
        </div>

        <div className="p-4 bg-[#F9FAFB] rounded-lg border border-gray-200 hover:border-[#11A7B6] transition">
          <Features
            features={features}
            onFeatureChange={(selected) =>
              handleChange('selectedFeatures', selected)
            }
          />
        </div>

        <div className="p-4 bg-[#F9FAFB] rounded-lg border border-gray-200 hover:border-[#11A7B6] transition">
          <RecommendationType
            onRecommendationTypeChange={(selected) =>
              handleChange('selectedRecommendationType', selected)
            }
          />
        </div>
      </div>

      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
