import { useContext } from "react";
import { IceCream, Ghost } from "react-kawaii";
import { darkModeColors, colors } from "../../data";

import { StateContext } from "../../stateContext";
import styles from "./IceCreamWrapper.module.css";

export default function IceCreamWrapper() {
  const { selectedColor, selectedMood, darkModeOn } = useContext(StateContext);
  const color = darkModeOn
    ? darkModeColors[selectedColor]
    : colors[selectedColor];

  return (
    <div className={styles.IceCreamWrapper}>
      {darkModeOn ? (
        <Ghost size={300} color={color} mood={selectedMood} />
      ) : (
        <IceCream size={400} color={color} mood={selectedMood} />
      )}
    </div>
  );
}
