import { createContext, useState } from "react";
import { colors, moods } from "./data";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [darkModeOn, setDarkModeOn] = useState(false);

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
