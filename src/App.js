import './App.css';
import React from 'react';
import Article from './Article';

function App(props) {
  return (
    <div>
      <h1>Hello, world! Welcome to {props.language} !</h1>
      <Article component ="Function"/>
    </div>
  );
}
export default App;