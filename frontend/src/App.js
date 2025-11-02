import { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendationsUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };
console.log('API_URL:', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="min-h-screen bg-[#F1F3F5] flex flex-col items-center py-12 px-4 font-sans">
      <h1 className="text-4xl font-bold text-[#11A7B6] mb-4 text-center">
        Recomendador de Produtos RD Station
      </h1>

      <p className="max-w-3xl text-center text-gray-600 mb-10 leading-relaxed">
        Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
      </p>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
        <div>
          <Form onRecommendationsChange={handleRecommendationsUpdate} />
        </div>
        <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
