import React from "react";

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

export default function useSkils() {
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
