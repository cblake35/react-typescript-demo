import React from 'react';
import './App.css';
import Clock from './components/Clock';


let testProp: string = 'Am I getting passed to the Clock component?'; // variables with type string which will be passed as props to the Clock component
let optionalProp: string = 'You sure are!';

      //1         //2                           // 1. The name of the functional component
const App: React.FunctionComponent = () => {    // 2. By including ":", we are assigning "App" the type of FunctionComponent
  return (
    <div className="App">
      <div className='verticalCenter'>
        <Clock testProp={testProp} optionalProp={optionalProp} />
      </div>
    </div>
  );
}

export default App;
