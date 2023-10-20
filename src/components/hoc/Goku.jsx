import React from "react";
import styles from "../../styles/character.module.css";
import withCountHits from "../WithCountHits";
import goku from "../../img/goku.png";
import { actionsType } from "../../App";

function Goku({ name, gokuHits, gokuLife, dispatch }) {
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={goku} alt={name}></img>
      <br />
      <button
        onClick={() => {
          dispatch({ type: actionsType.gokuHit, payload: { hits: 10 } });
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
    </div>
  );
}

export default withCountHits(Goku);
