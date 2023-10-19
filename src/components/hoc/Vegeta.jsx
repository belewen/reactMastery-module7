import React, { useEffect } from "react";
import vegeta from "../../img/vegeta.png";
import styles from "../../styles/character.module.css";
import withCountHits from "../WithCountHits";
import { actionsType } from "../../App";

function Vegeta({ name, vegetaHits, vegetaLife, dispatch }) {
  console.log("rerender vegeta");

  useEffect(() => {
    console.log("useEffect vegeta suite à la modif de vegetaLife");
  }, [vegetaLife]);

  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={vegeta} alt={name}></img>
      <br />
      <button
        onClick={() => {
          dispatch({ type: actionsType.vegetaHit });
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
    </div>
  );
}

export default withCountHits(Vegeta);
