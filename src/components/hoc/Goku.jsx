import React from "react";
import styles from "../../styles/character.module.css";
import withCountHits from "../withCountHits";
import goku from "../../img/goku.png";
import useSkils, { actionsType } from "./useSkills";

function Goku({ name, gokuHits, gokuLife, isGokuDead, dispatch }) {
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={goku} alt={name}></img>
      <br />
      <button
        disabled={isGokuDead}
        onClick={() => {
          dispatch({ type: actionsType.gokuHit, payload: { hits: 15 } });
        }}
      >
        {name} frappe
      </button>
      <table>
        <thead>
          <tr>
            <th>Coups</th>
            <th>Vie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gokuHits}</td>
            <td>{gokuLife}</td>
          </tr>
        </tbody>
      </table>
      {isGokuDead ? <p>Goku est mort</p> : null}
    </div>
  );
}

export default withCountHits(Goku);
