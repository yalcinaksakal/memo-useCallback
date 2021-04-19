import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";
import "./App.css";

function App() {
  console.log("App running");
  const [showParagraph, setShow] = useState(false);
  const [listTitle, setListTitle] = useState("My List");
  const [toggleAllowed, setToggleAllowed] = useState(false);

  const toggle = useCallback(() => {
    if (toggleAllowed) setShow(prevState => !prevState);
  }, [toggleAllowed]);

  const toggleAllow = useCallback(() => {
    setToggleAllowed(prevState => !prevState);
  }, []);

  const listItems = useMemo(() => [5, 4, 7, -2, 3, 0], []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo title={listTitle} items={listItems} show={showParagraph} />
      <Button onClick={toggle} disabled={!toggleAllowed}>
        Toggle List
      </Button>
      <Button onClick={toggleAllow}>Toggle Toggling</Button>
    </div>
  );
}

export default App;
