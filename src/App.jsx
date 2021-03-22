import React, { useState } from "react";
import Welcome from "./components/WelcomeModal";
import Navigation from "./components/Navigation";
import TypingForm from "./components/TypingForm";
import "./App.css";
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  return (
    <>
      <Navigation />
      <div style={{ padding: "15px" }}>
        {isModalVisible && (
          <Welcome
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
        <TypingForm />
      </div>
    </>
  );
};

export default App;
