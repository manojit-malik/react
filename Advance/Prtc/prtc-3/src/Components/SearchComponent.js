import React, { useState } from 'react';
import useDebounce from '../useDebounce';
import useThrottle from '../useThrottle';
import '../MyStyle.css';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [useDebounceToggle, setUseDebounceToggle] = useState(true);
  const delay = 4000;

  const debouncedQuery = useDebounce(query, delay);
  const throttledQuery = useThrottle(query, delay);

  const searchQuery = useDebounceToggle ? debouncedQuery : throttledQuery;

  React.useEffect(() => {
    if (searchQuery) {
      console.log(`Call with term: ${searchQuery}`);
    }
  }, [searchQuery]);

  return (
    <div className="search-container">

      <input type="text" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />

      <div className="toggle-container">

        <input type="checkbox" checked={useDebounceToggle} onChange={() => setUseDebounceToggle(!useDebounceToggle)} />
        
        <label className="toggle-label">
            
          Use {useDebounceToggle ? 'Throttle' : 'Debounce'}
          
        </label>

      </div>

      <div className="results">

        <p>Debounced value: {debouncedQuery}</p>

        <p>Throttled value: {throttledQuery}</p>

      </div>
    </div>
  );
}

export default SearchComponent;