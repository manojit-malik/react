import React, { useState , useEffect} from 'react';
import useDebounce from '../useDebounce'

const SearchComponent = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500); //500ms delay

    useEffect(() => {
        if(debouncedSearchTerm) {
            // Make API call or perform search logic here
            console.log('Searching for:', debouncedSearchTerm);
        }
    }, [debouncedSearchTerm])

    return (
        <div>
          <h1>Search Example</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
        </div>
      );

}

export default SearchComponent;