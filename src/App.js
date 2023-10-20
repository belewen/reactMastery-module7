import React from "react";
import styles from "./App.module.css";
import BattleDBZ from "./components/hoc/BattleDBZ";

function App() {
  return (
    <div className={styles.App}>
      <BattleDBZ></BattleDBZ>
    </div>
  );
}

export default App;
