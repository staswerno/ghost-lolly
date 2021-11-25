import { useContext } from "react";
import { colors, darkModeColors } from "../../data";
import { StateContext } from "../../stateContext";

import Color from "./Color";
import styles from "./Colors.module.css";

export default function ColorList() {
  const { darkModeOn } = useContext(StateContext);
  const currColors = darkModeOn ? darkModeColors : colors;

  return (
    <div className={styles.Colors}>
      {currColors.map((color, index) => (
        <Color color={color} index={index} />
      ))}
    </div>
  );
}
