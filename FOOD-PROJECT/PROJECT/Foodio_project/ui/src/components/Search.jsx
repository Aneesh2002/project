import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null); // Single result item
  const [error, setError] = useState(null); // Handle error messages

  const handleSearch = async () => {
    if (!search) {
      setError("Please enter a search term.");
      return;
    }
    setError(null); // Clear error before new request
    try {
      const response = await fetch(`/api/search/${search}`); // Send trimmed search query
      
      if (response.ok) {
        const data = await response.json();
        setResult(data.item); // Set the item from the backend
        console.log(data.item);
        
        if (!data.item) setError("No matching item found.");
      } else {
        setError("Search failed. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while searching.");
    }
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for a food item by name"
            className="border-2 rounded-xl w-96 px-4 py-2 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 font-medium mb-4">
          {error}
        </div>
      )}

      {/* Search Results */}
      <div className="mt-4">
        {result ? (
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Dish Name: {result.dishName}</h3>
            <p><strong>Type:</strong> {result.type}</p>
            <p><strong>Price:</strong> ${result.price}</p>
            <p><strong>Restaurant:</strong> {result.restuarant}</p>
          </div>
        ) : (
          !error && <p className="text-center text-gray-500">No results yet. Try searching for a food item.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
