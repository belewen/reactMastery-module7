import React from "react";
import goku from "../../img/goku.png";
import vegeta from "../../img/vegeta.png";
import styles from "../../styles/character.module.css";

export default function Character({ name, hits, life }) {
  const characterImage = name.toLowerCase() === "goku" ? goku : vegeta;
  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={characterImage} alt={name}></img>
      <br />
      <button>{name} frappe</button>
      <table>
        <thead>
          <tr>
            <th>Coups</th>
            <th>Vie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits ? hits : "Inconnu"}</td>
            <td>{life ? life : "Inconnu"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
