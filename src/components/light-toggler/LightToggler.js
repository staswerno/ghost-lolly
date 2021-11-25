import { StateContext } from "../../stateContext";
import { Ghost, IceCream } from "react-kawaii";
import { useContext } from "react";

import styles from "./LightToggler.module.css";
const WIDTH = 50;

export default function LightToggler() {
  const { darkModeOn, setDarkModeOn } = useContext(StateContext);

  return (
    <div
      onClick={() => {
        setDarkModeOn(!darkModeOn);
      }}
      className={styles.LightToggler}
    >
      {darkModeOn ? <IceCream size={WIDTH} /> : <Ghost size={WIDTH} />}
    </div>
  );
}
