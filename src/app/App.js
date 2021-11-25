import { useContext } from "react";

import { StateContext } from "../stateContext";
import { IceCreamWrapper, Colors, Moods, LightToggler } from "../components";

import "./App.css";

function App() {
  const { darkModeOn } = useContext(StateContext);
  return (
    <div className={`App ${darkModeOn ? "darkBG" : ""}`}>
      <LightToggler />
      <main>
        <IceCreamWrapper />
        <Colors />
        <Moods />
      </main>
    </div>
  );
}

export default App;
