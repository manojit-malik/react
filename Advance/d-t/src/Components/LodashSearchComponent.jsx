import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

function LodashSearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    _.debounce((term) => {
      // Make API call or perform search logic here
      console.log('Searching for:', term);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default LodashSearchComponent;