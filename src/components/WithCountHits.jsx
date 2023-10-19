import React from "react";

function withCountHits(CharacterComponent) {
  const INITIAL_HIT = 0;
  const INITIAL_LIFE = 100;

  function ComponentHits({ ...props }) {
    return <CharacterComponent {...props}></CharacterComponent>;
  }
  return ComponentHits;
}

export default withCountHits;
