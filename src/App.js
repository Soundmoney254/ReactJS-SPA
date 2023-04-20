import './App.css';
import React from 'react';
import Article from './Article';
import Typing from './Typing';
import Image from './Image';

function App(props) {
  return (
    <>
      <br></br>
      <h1 id='heading'>Welcome to {props.language} !</h1>
      <Article component ="Function"/>
      <br></br>
      <Typing/>
      <Image/>
    </>
  );
}
export default App;