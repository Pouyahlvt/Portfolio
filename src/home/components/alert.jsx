const AlertCustom = ({
  text = "Nothing set for text :(",
  state = true,
  setState,
  classNameDiv = ``,
  classNameText = ``,
  theme,
}) => {
  return (
    <div
      className={`absolute flex items-center w-100 h-16 rounded-xl border-l-4 z-20 mt-full ml-2
        transition-all duration-400 ease-in-out overflow-hidden
        ${state ? "translate-y-0" : "-translate-y-50"}
    ${classNameDiv}
    ${
      theme === "light"
        ? "bg-(--color-redorange) border-(--color-rosewood)"
        : "bg-(--color-sharabi) border-(--color-pumpkin)"
    } max-lg:w-80 max-md:w-50 `}>
      <p
        className={`text-2xl ml-4 font-poppins tracking-tighter font-semibold ${classNameText} 
        ${theme === "light" ? "text-(--color-dark-azur)" : "text-(--color-pastelOrange)"}`}>
        {text}
      </p>
      <span
        onClick={() => {
          setState(false);
        }}
        className={`text-6xl rotate-45 font-semibold ml-auto mr-2 -mt-2 hover:scale-110 
       transition-all duration-200 ease-in-out active:scale-90 select-none
       ${theme === "light" ? "text-(--color-dark-azur)" : "text-(--color-pastelOrange)"}`}>
        +
      </span>
      <div
        className={`absolute h-2 bottom-0 rounded-r-full transition-all ease-linear
        ${theme === "light" ? "bg-(--color-rosewood) " : "bg-(--color-pumpkin)"} ${state ? "w-0 duration-4000" : "w-full duration-75 delay-200"}`}></div>
    </div>
  );
};

export default AlertCustom;
