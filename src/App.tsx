import React, { useEffect } from 'react';
import "./App.css";
import mainCall from './api/mainCall';


export const App = () => {

  useEffect(() => {
  mainCall.get(``,{}).then((res) => console.log(res))
})

  return (
    <div className="App">
      <div>Pokemon</div>
    </div>
  );
}

