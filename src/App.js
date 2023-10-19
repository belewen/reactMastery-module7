import React from "react";
import styles from "./App.module.css";

import Goku from "./components/hoc/Goku";
import Vegeta from "./components/hoc/Vegeta";

function App() {
  return (
    <div className={styles.App}>
      <h1>High Order Component</h1>
      <hr />
      <div className={styles.hoc}>
        <Goku name="Goku"></Goku>
        <Vegeta name={"Vegeta"}></Vegeta>
      </div>
    </div>
  );
}

export default App;
