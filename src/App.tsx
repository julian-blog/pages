import React from 'react';
import logo from './logo.svg';
import './App.css';  
import _ from 'lodash';
import LZString from 'lz-string';

function App() {
  const obj = {"hello":"world","foo":"bar","key1":"value1"};
  const uuids = ["e2dc7bf90dac413ca1801814ae2d9864", "566e73fdc7964240b2048c2906ac1dbe"];
  
  console.log(JSON.stringify(obj).length); // 71
  console.log(encodeURIComponent(JSON.stringify(obj)).length); // 85
  console.log(LZString.compressToEncodedURIComponent(JSON.stringify(obj)).length);  // 93

  console.log(JSON.stringify(uuids).length); // 71
  console.log(encodeURIComponent(JSON.stringify(uuids)).length); // 85
  console.log(LZString.compressToEncodedURIComponent(JSON.stringify(uuids)).length);  // 93
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
