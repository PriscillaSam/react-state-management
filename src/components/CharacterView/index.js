import React, { useState, useEffect } from "react";
import { url } from "../../constants";
import "./styles.css";

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`${url}/${match.params.id}`)
      .then(response => response.json())
      .then(response => setCharacter(response.character));
  }, [match.params.id]);

  return (
    <section className="CharacterView">
      <h2>{character.name}</h2>
      <ul>
        <li>
          <strong>Birth Year:</strong> {character.birthYear}
        </li>
        <li>
          <strong>Eye Color:</strong> {character.eyeColor}
        </li>
        <li>
          <strong>Gender:</strong> {character.gender}
        </li>
        <li>
          <strong>Hair Color:</strong> {character.hairColor}
        </li>
        <li>
          <strong>Mass:</strong> {character.mass}
        </li>
        <li>
          <strong>Skin Color:</strong> {character.skinColor}
        </li>
      </ul>
    </section>
  );
};

export default CharacterView;
