import React, { useState } from "react";

function withCountHits(CharacterComponent) {
  const INITIAL_HIT = 0;
  const INITIAL_LIFE = 100;

  function ComponentHits({ ...props }) {
    const [hits, setHits] = useState(INITIAL_HIT);
    const [life, setLife] = useState(INITIAL_LIFE);

    const handleHits = () => {
      setHits((prevState) => prevState + 1);
    };

    return (
      <CharacterComponent
        hits={hits}
        countHits={handleHits}
        life={life}
        {...props}
      ></CharacterComponent>
    );
  }
  return ComponentHits;
}

export default withCountHits;
