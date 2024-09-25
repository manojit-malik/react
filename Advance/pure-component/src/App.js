// import logo from './logo.svg';
import './App.css';
// import PureComp from './PureComp';
import MemoizationExample from './MemoizationExample';
import Counter from './Components/Counter';
import ParentComponent from './UseCallbackHook/ParentComponent';
import ParentComp from './ReactMemo/ParentComp';

function App() {
  return (
    <div>
      {/* <PureComp msg="Pure Component" />
      <PureComp name="Pure Component" /> */}

      {/* <MemoizationExample /> */}

        {/* <Counter /> */}

        {/* <ParentComponent /> */}

        <ParentComp />
      
    </div>
  );
}

export default App;