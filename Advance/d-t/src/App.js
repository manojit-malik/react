// import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/SearchComponent';
import LodashSearchComponent from './Components/LodashSearchComponent';
import ThrottledComponent from './Components/ThrottleComponent';
import LoadashThrottledComponent from './Components/LodashThrottledComponent'

function App() {
  return (
    <div className="App">
      <SearchComponent />

      < LodashSearchComponent />

      <ThrottledComponent />

      <LoadashThrottledComponent />
    </div>
  );
}

export default App;