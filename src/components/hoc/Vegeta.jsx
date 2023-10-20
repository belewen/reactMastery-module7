import React from "react";
import vegeta from "../../img/vegeta.png";
import styles from "../../styles/character.module.css";
import withCountHits from "../withCountHits";
import useSkils, { actionsType } from "./useSkills";

function Vegeta({ name, vegetaHits, vegetaLife, isVegetaDead, dispatch }) {
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={vegeta} alt={name}></img>
      <br />
      <button
        disabled={isVegetaDead}
        onClick={() => {
          dispatch({ type: actionsType.vegetaHit, payload: { hits: 10 } });
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
            <td>{vegetaHits}</td>
            <td>{vegetaLife}</td>
          </tr>
        </tbody>
      </table>
      {isVegetaDead ? <p>Vegeta est mort</p> : null}
    </div>
  );
}

export default withCountHits(Vegeta);
