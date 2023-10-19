import React from "react";
import vegeta from "../../img/vegeta.png";
import styles from "../../styles/character.module.css";
import withCountHits from "../WithCountHits";

function Goku({ name, life, hits, countHits }) {
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={vegeta} alt={name}></img>
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
