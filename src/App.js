import React from "react";
import styles from "./App.module.css";
import BattleDBZ from "./components/hoc/BattleDBZ";
import CompundComponents from "./components/compoundComponent/CompoundComponents";
import CompoundComponentTab from "./components/compoundComponentTab/CompoundComponentTab";

function App() {
  return (
    <div className={styles.App}>
      <CompoundComponentTab></CompoundComponentTab>
      <CompundComponents></CompundComponents>
      <BattleDBZ></BattleDBZ>
    </div>
  );
}

export default App;
