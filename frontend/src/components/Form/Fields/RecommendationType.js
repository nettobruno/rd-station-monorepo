import Checkbox from "../../shared/Checkbox";

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-[#11A7B6] mb-3">
        Tipo de Recomendação
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
        <label className="flex items-center cursor-pointer text-[#212429] hover:text-[#008096] transition">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange("SingleProduct")}
            className="form-radio h-5 w-5 text-[#11A7B6] focus:ring-[#19C1CE] border-gray-300 transition"
            defaultChecked
          />
          <span className="ml-2 text-sm">Produto Único</span>
        </label>

        <label className="flex items-center cursor-pointer text-[#212429] hover:text-[#008096] transition">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange("MultipleProducts")}
            className="form-radio h-5 w-5 text-[#11A7B6] focus:ring-[#19C1CE] border-gray-300 transition"
          />
          <span className="ml-2 text-sm">Múltiplos Produtos</span>
        </label>
      </div>
    </div>
  );
}

export default RecommendationType;
