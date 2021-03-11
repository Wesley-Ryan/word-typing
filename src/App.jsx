import React from "react";
import Navigation from "./components/Navigation";
import TypingForm from "./components/TypingForm";
import "./App.css";
const App = () => {
  return (
    <>
      <Navigation />
      <h1>Type'sy</h1>
      <p>
        A typing game that something will type when you type... How fast can you
        type?
      </p>
      <p>something else... somet type stuff</p>

      <TypingForm />
    </>
  );
};

export default App;
