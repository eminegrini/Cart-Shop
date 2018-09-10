import React from 'react';
import './App.css';
import NavBar from './nav'


const App = (props: Props) => {
  return (
    <div>
      <NavBar />
     {props.children}
    </div>
  )

}
export default App;