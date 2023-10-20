import React from "react";

// HOC inutile, mais utile pour l'apprentissage
function withCountHits(CharacterComponent) {
  function ComponentHits({ ...props }) {
    return <CharacterComponent {...props}></CharacterComponent>;
  }
  return ComponentHits;
}

export default withCountHits;
