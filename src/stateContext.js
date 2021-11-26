import { createContext, useState } from "react";
import { moods } from "./data";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [darkModeOn, setDarkModeOn] = useState(userPrefersDark);

  return (
    <StateContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedMood,
        setSelectedMood,
        darkModeOn,
        setDarkModeOn
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
