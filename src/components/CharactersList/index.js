import React from "react";
import CharacterListItem from "../CharacterListItem";
import useFetch from "../../hooks/useFetch";
import { url } from "../../constants";
import reducer, { initialState } from "../../reducers/characters";

const CharactersList = () => {
  const { characters: response, loading, error } = useFetch(
    url,
    reducer,
    initialState
  );
  const characters = response ? response.characters : [];

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <ul>
            {characters.map(character => (
              <CharacterListItem character={character} />
            ))}
          </ul>
        )}
      </div>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CharactersList;
