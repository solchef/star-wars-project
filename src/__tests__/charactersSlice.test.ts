import { configureStore, Store } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import charactersReducer, { fetchCharacters, clearSelectedCharacter, selectCharacter } from '../redux/slices/charactersSlice'; // Adjust path if necessary

interface RootState {
  characters: {
    characters: any[];
    loading: boolean;
    error: string | null;
    selectedCharacter: any | null;
  };
}

describe('charactersSlice', () => {
  let store: Store<RootState, AnyAction>;

  beforeEach(() => {
    store = configureStore({ reducer: { characters: charactersReducer } });
  });

  it('should return the initial state', () => {
    const initialState: RootState['characters'] = {
      characters: [],
      loading: false,
      error: null,
      selectedCharacter: null,
    };
    expect(store.getState().characters).toEqual(initialState);
  });

  it('should handle selectCharacter', () => {
    const character = { name: 'Luke Skywalker' };
    store.dispatch(selectCharacter(character));
    expect(store.getState().characters.selectedCharacter).toEqual(character);
  });

  it('should handle clearSelectedCharacter', () => {
    store.dispatch(selectCharacter({ name: 'Darth Vader' }));
    store.dispatch(clearSelectedCharacter());
    expect(store.getState().characters.selectedCharacter).toBeNull();
  });

  it('should handle fetchCharacters pending', async () => {
    const action = fetchCharacters.pending('fetch', 1); // Pass a valid page number
    store.dispatch(action);
    const state = store.getState().characters;
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchCharacters fulfilled', async () => {
    const characters = [{ name: 'Han Solo' }];
    const action = fetchCharacters.fulfilled(characters, 'fetch', 1); // Pass a valid page number
    store.dispatch(action);
    const state = store.getState().characters;
    expect(state.characters).toEqual(characters);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle fetchCharacters rejected', async () => {
    const action = fetchCharacters.rejected(new Error('Failed to fetch'), 'fetch', 1); // Pass a valid page number
    store.dispatch(action);
    const state = store.getState().characters;
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Failed to fetch');
  });
});
