import { Planet } from "react-kawaii";
import { moods } from "../../data";
import { useContext } from "react";

import { StateContext } from "../../stateContext";
import styles from "./Moods.module.css";

export default function Moods() {
  const { selectedMood, setSelectedMood, darkModeOn } = useContext(
    StateContext
  );
  return (
    <div className={styles.Moods}>
      {moods.map((mood) => (
        <span
          onClick={() => setSelectedMood(mood)}
          className={`${styles.MoodWrapper} ${
            mood === selectedMood ? styles.MoodWrapperSelected : ""
          }`}
          key={mood}
        >
          <Planet
            className={styles.Mood}
            color={darkModeOn ? "#FDF1D6" : "#fad201"}
            mood={mood}
            size={70}
          />
        </span>
      ))}
    </div>
  );
}
