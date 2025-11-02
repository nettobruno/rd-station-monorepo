function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full  bg-[#008096] hover:bg-[#19C1CE] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-sm"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
