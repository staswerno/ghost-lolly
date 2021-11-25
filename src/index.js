import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import StateContextProvider from "./stateContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
