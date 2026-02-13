export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        bg-[rgba(10,10,10,0.9)]`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-3 right-3 w-12 h-12 flex items-center justify-center text-white text-3xl focus:outline-none cursor-pointer bg-black rounded-full hover:bg-white/10 transition"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu links */}
      <div className="flex flex-col items-center space-y-6">
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transform transition-transform duration-300
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};
