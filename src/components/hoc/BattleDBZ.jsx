import React from "react";
import Goku from "./Goku";
import Vegeta from "./Vegeta";
import useSkils from "./useSkills";
import styles from "../../styles/character.module.css";

function BattleDBZ() {
  const [characterPropertiesState, dispatch] = useSkils();
  return (
    <div>
      {" "}
      <h1>High Order Component et useReducer</h1>
      <hr />
      <div className={styles.hoc}>
        <Goku
          name="Goku"
          gokuLife={characterPropertiesState.gokuLife}
          gokuHits={characterPropertiesState.gokuHits}
          dispatch={dispatch}
        ></Goku>
        <Vegeta
          name={"Vegeta"}
          vegetaLife={characterPropertiesState.vegetaLife}
          vegetaHits={characterPropertiesState.vegetaHits}
          dispatch={dispatch}
        ></Vegeta>
      </div>
    </div>
  );
}

export default BattleDBZ;
