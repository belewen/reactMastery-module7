import React from "react";
import styles from "./App.module.css";

import Goku from "./components/hoc/Goku";
import Vegeta from "./components/hoc/Vegeta";

export const actionsType = {
  gokuHit: "gokuHit",
  vegetaHit: "vegetaHit",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsType.gokuHit: {
      return {
        ...state,
        vegetaLife: state.vegetaLife - action.payload.hits,
        gokuHits: state.gokuHits + 1,
      };
    }
    case actionsType.vegetaHit: {
      return {
        ...state,
        gokuLife: state.gokuLife - action.payload.hits,
        vegetaHits: state.vegetaHits + 1,
      };
    }
    default:
      throw new Error("Ce dispatch est inconnu");
  }
};

function useSkils() {
  const initialSkills = {
    gokuHits: 0,
    vegetaHits: 0,
    gokuLife: 100,
    vegetaLife: 100,
  };

  const [characterPropertiesState, dispatch] = React.useReducer(
    reducer,
    initialSkills
  );

  return [characterPropertiesState, dispatch];
}

function App() {
  const [characterPropertiesState, dispatch] = useSkils();

  return (
    <div className={styles.App}>
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

export default App;
