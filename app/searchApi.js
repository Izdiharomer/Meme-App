const handleSearch = async () => {
    try {
      const response = await fetch(`YOUR_IMAGE_SEARCH_API_URL?q=${searchQuery}`);
      const data = await response.json();
      const searchResultsData = data.results; // Adjust the property name according to your API response structure
      setSearchResults(searchResultsData);
    } catch (error) {
      console.log('Error occurred while searching images:', error);
    }
  };