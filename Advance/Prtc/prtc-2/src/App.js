import './App.css';
import ParentComponent from './Components/ParentComponent';
import ComputationComponent from './Components/ComputationComponent';

function App() {
  return (
    <div>
      <ParentComponent />
      <ComputationComponent number={5} />
    </div>
  );
}

export default App;