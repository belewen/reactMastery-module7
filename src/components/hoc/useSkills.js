import React from "react";

export const actionsType = {
  gokuHit: "gokuHit",
  vegetaHit: "vegetaHit",
};

const initialSkills = {
  gokuHits: 0,
  vegetaHits: 0,
  gokuLife: 100,
  vegetaLife: 100,
  isGokuDead: false,
  isVegetaDead: false,
};

const defaultReducer = (state, action) => {
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

const custumReducer = (state, action) => {
  if (state.gokuLife <= action.payload.hits) {
    return { ...state, isGokuDead: true };
  }
  if (state.vegetaLife <= action.payload.hits) {
    return { ...state, isVegetaDead: true };
  } else {
    return defaultReducer(state, action);
  }
};

export default function useSkils() {
  const [characterPropertiesState, dispatch] = React.useReducer(
    custumReducer,
    initialSkills
  );

  return [characterPropertiesState, dispatch];
}
