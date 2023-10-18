/* eslint-disable react/prop-types */
import { useState } from 'react';

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState('');
  const defaultQuery = 'nature'; 

  // const handleSearch = () => {
  //   setSearchQuery(query);
  // }

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     setSearchQuery(query);
  //   }
  // }
  const handleSearch = () => {
    const searchQuery = query.trim() === '' ? defaultQuery : query;
    setSearchQuery(searchQuery);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const searchQuery = query.trim() === '' ? defaultQuery : query;
      setSearchQuery(searchQuery);
    }
  }

  return (
    <div className="flex flex-col items-center space-x-2">
      <input
        className="border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring  focus:border-black text-black"
        style={{ width: '40vw' }} 
        type="text"
        placeholder="Search photos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="bg-amber-200 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
