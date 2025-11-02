function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center cursor-pointer select-none text-[#212429] hover:text-[#008096] transition">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-[#11A7B6] focus:ring-[#19C1CE] border-gray-300 rounded transition"
        {...props}
      />
      <span className="ml-2 text-sm">{children}</span>
    </label>
  );
}

export default Checkbox;
