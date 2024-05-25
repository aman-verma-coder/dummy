import {useEffect, useState} from 'react';
import './App.css';

function App () {
  const [text, setText] = useState ('');
  // const [name, setName] = useState ('Aman');
  // 1 Every Render
  // useEffect (() => {
  //   console.log ('UI RENDERING DONE');
  // });
  // 2 First Render
  // useEffect (() => {
  //   console.log ('UI RENDERING DONE');
  // }, []);
  // 3 First Render + Whenever dependency changes
  // useEffect (
  //   () => {
  //     console.log ('UI RENDERING DONE');
  //   },
  //   [text]
  // );
  // 4 To handle unmounting of a component
  useEffect (
    () => {
      // Add event listener
      console.log ('Listener Added');
      return () => {
        console.log ('Listener Removed');
      };
    },
    [text]
  );
  function changeHandler (event) {
    setText (event.target.value);
    console.log (text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
