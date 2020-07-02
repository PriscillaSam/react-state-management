import React from "react";

const CharacterListItem = ({ character }) => {
  return (
    <li>
      <button>{character.name}</button>
    </li>
  );
};

export default CharacterListItem;
