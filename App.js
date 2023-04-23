// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from 'react-dom/client';

const Header =()=>{
  return <>
  i am header
  </>
}
const App = () => {
  return (
    <>
    <Header/>
    </>
  )
}

export default App
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<App/>);