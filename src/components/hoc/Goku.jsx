import React from "react";
import styles from "../../styles/character.module.css";
import withCountHits from "../WithCountHits";
import goku from "../../img/goku.png";

function Goku({ name = "Goku", life, hits, countHits }) {
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={goku} alt={name}></img>
      <br />
      <button onClick={countHits}>{name} frappe</button>
      <table>
        <thead>
          <tr>
            <th>Coups</th>
            <th>Vie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>
            <td>{life}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default withCountHits(Goku);
