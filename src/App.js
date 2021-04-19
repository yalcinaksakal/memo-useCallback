import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";
import "./App.css";

function App() {
  console.log("App running");
  const [showParagraph, setShow] = useState(false);

  const [toggleAllowed, setToggleAllowed] = useState(false);

  const toggle = useCallback(() => {
    if (toggleAllowed) setShow(prevState => !prevState);
  }, [toggleAllowed]);

  const toggleAllow = useCallback(() => {
    setToggleAllowed(prevState => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={toggle}>Toggle Paragraph</Button>
      <Button onClick={toggleAllow}>Allow Toggling</Button>
    </div>
  );
}

export default App;
