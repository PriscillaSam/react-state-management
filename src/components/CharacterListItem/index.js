import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const CharacterListItem = ({ character, match }) => {
  const isActive = character.id === match.params.id;

  return (
    <li className="CharacterListItem">
      <Link to={`/characters/${character.id}`}>{character.name}</Link>
    </li>
  );
};

export default CharacterListItem;
