import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CharacterListItem from "../CharacterListItem";
import CharacterView from "../CharacterView";

import { url } from "../../constants";
import actions from "../../actions";
import reducer, { initialState } from "../../reducers/characters";
import useThunkReducer from "../../hooks/useThunkReducer";

import "./style.css";

const fetchCharacters = dispatch => {
  dispatch({ type: actions.LOADING });

  fetch(url)
    .then(response => response.json())
    .then(response =>
      dispatch({
        type: actions.FETCHING_COMPLETED,
        payload: response.characters
      })
    )
    .catch(error => dispatch({ type: actions.FETCHING_ERROR, payload: error }));
};

const CharactersList = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  const { characters, error, loading } = state;

  useEffect(() => {
    dispatch(dispatch => {});
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Star Wars Characters</h1>
        <button onClick={() => dispatch(fetchCharacters)}>Fetch Data</button>
      </header>
      <main className="CharactersList">
        <section>
          {loading ? (
            <p>Loading</p>
          ) : (
            <ul>
              {characters.map(character => (
                <CharacterListItem character={character} key={character.id} />
              ))}
            </ul>
          )}
        </section>
        <section>
          <Route path="/characters/:id" component={CharacterView} />
        </section>
      </main>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CharactersList;
