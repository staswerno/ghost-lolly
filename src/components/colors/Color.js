import { useContext } from "react";

import { StateContext } from "../../stateContext";
import styles from "./Colors.module.css";

export default function Color({ color, index }) {
  const { selectedColor, setSelectedColor } = useContext(StateContext);

  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color}
        className={`${styles.ColorSquare} ${
          index === selectedColor ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(index)}
      />
    </span>
  );
}
