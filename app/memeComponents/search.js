import React, { useState } from 'react';
import Memes from './meme';
import './search.css';

function Search({ memes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // Clear the search results
      setSearchResults([]);
      return;
    }

    const filteredMemes = memes.filter(
      (meme) => meme.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredMemes);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  if (!memes || memes.length === 0) {
    return <p>
      
    </p>
  }

  return (
    <div className="search-container">
      <Memes memes={searchResults.length > 0 ? searchResults : memes} />
      <section>
        <div className="searchItem">
          <label htmlFor="searchQuery">Search Image:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="searchItem">
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </section>
    </div>
  );
}

export default Search;
