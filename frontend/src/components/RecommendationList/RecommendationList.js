function RecommendationList({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10 text-base">
        Nenhuma recomendação disponível.
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-100 space-y-6 text-gray-700">
      <h2 className="text-2xl font-semibold text-[#11A7B6] mb-6 text-center md:text-left">
        Lista de Recomendações
      </h2>

      {recommendations.map((product) => (
        <div
          key={product.id}
          className="border border-[#E3E5E8] rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#19C1CE]"
        >
          <h3 className="text-lg font-bold text-[#212429] mb-2">
            {product.name}
          </h3>

          <p className="text-sm text-[#636E7C] mb-1">
            <span className="font-medium text-[#11A7B6]">Categoria:</span>{" "}
            {product.category}
          </p>

          <p className="text-sm text-[#636E7C] leading-relaxed">
            <span className="font-medium text-[#11A7B6]">Preferências:</span>{" "}
            {product.preferences.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationList;
