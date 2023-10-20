import React from "react";
import Goku from "./Goku";
import Vegeta from "./Vegeta";
import useSkils from "./useSkills";
import styles from "../../styles/character.module.css";

function BattleDBZ() {
  const [
    { vegetaHits, gokuHits, vegetaLife, gokuLife, isGokuDead, isVegetaDead },
    dispatch,
  ] = useSkils();
  return (
    <div>
      {" "}
      <h1>High Order Component et useReducer</h1>
      <hr />
      <div className={styles.hoc}>
        <Goku
          name="Goku"
          gokuHits={gokuHits}
          gokuLife={gokuLife}
          isGokuDead={isGokuDead}
          dispatch={dispatch}
        ></Goku>
        <Vegeta
          name={"Vegeta"}
          vegetaHits={vegetaHits}
          vegetaLife={vegetaLife}
          isVegetaDead={isVegetaDead}
          dispatch={dispatch}
        ></Vegeta>
      </div>
    </div>
  );
}

export default BattleDBZ;
