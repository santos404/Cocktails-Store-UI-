import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowBack } from "react-icons/md";
import { Link, animateScroll as scroll } from "react-scroll";
import toast from "react-hot-toast";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [inputError, setInputError] = useState(false);

  // Fetch dummy data on initial load
  const fetchDrinks = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      setDrinks(response.data.drinks.slice(0, 6));
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  // Handle search
  const handleSearch = async () => {
    if (searchTerm.length > 5) {
      setInputError(true);
      toast.error("Drink name must be between 2 and 5 characters");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setSearchResults(response.data.drinks.slice(0, 6));
      setInputError(false);
    } catch (error) {
      console.error("Error searching drinks:", error);
      toast.error("Error searching drinks");
    }
  };

  // Handle flavour link click
  const handleFlavourClick = () => {
    setSearchResults([]);
    fetchDrinks();
    scroll.scrollToTop(); // Scroll to the top after refresh
  };

  // Display search results or dummy data
  const displayDrinks = searchResults.length > 0 ? searchResults : drinks;

  return (
    <section
      id="product"
      className="font-poppins bg-customBackground min-h-screen p-4 pt-16"
    >
      <div className="relative flex mx-auto border-[2px] border-gray-300 rounded-md md:w-1/2 w-full my-2 ">
        <input
          type="text"
          placeholder="Search by alphabet..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`px-4 py-2 focus:outline-none bg-customBackground w-3/4 ${
            inputError ? "border-rose-500" : "focus:border-indigo-600"
          }`}
        />
        <button
          onClick={handleSearch}
          className="w-1/4 px-3 py-2 bg-gray-300 text-gray-800 rounded-r-md hover:bg-gray-500 font-semibold"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {displayDrinks && displayDrinks.length > 0 ? (
          displayDrinks.map((drink) => (
            <div
              key={drink.idDrink}
              className="bg-white p-2 rounded-md shadow-md text-left w-80 h-100 mx-auto"
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-auto rounded-md mb-2"
              />
              <div className="flex justify-between">
                <div>
                  <h3 className="text-gray-800 text-sm md:text-base font-semibold">
                    Name: {drink.strDrink}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Category: {drink.strCategory}
                  </p>
                </div>
                <div>
                  <Link
                    to="flavour"
                    smooth={true}
                    duration={500}
                    className="text-slate-500 flex items-center gap-1 mt-2"
                    onClick={handleFlavourClick}
                  >
                    <MdArrowBack />
                    <span>Refresh</span>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-800">No results found</p>
        )}
      </div>
    </section>
  );
};

export default Products;
