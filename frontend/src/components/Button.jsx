function Button({ handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="
        bg-red-600
        hover:bg-red-700
        active:scale-95
        text-white
        font-semibold
        px-8
        py-4
        rounded-r-xl
        transition-all
        duration-300
        shadow-lg
        hover:shadow-red-500/40
        cursor-pointer
      "
        >
            Search
        </button>
    );
}

export default Button;