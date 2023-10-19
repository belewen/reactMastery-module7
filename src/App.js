import React from "react";
import styles from "./App.module.css";

import Goku from "./components/hoc/Goku";
import Vegeta from "./components/hoc/Vegeta";

export const actionsType = {
  gokuHit: "gokuHit",
  vegetaHit: "vegetaHit",
};

function App() {
  const initialProperties = {
    gokuHits: 0,
    vegetaHits: 0,
    gokuLife: 100,
    vegetaLife: 100,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionsType.gokuHit: {
        return {
          ...state,
          vegetaLife: state.vegetaLife - 20,
          gokuHits: state.gokuHits + 3,
        };
      }
      case actionsType.vegetaHit: {
        return {
          ...state,
          gokuLife: state.gokuLife - 10,
          vegetaHits: state.vegetaHits + 12,
        };
      }
      default:
        throw new Error("Ce dispatch est inconnu");
    }
  };

  const [characterPropertiesState, dispatch] = React.useReducer(
    reducer,
    initialProperties
  );
  return (
    <div className={styles.App}>
      <h1>High Order Component</h1>
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
