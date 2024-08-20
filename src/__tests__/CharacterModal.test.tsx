import { configureStore } from '@reduxjs/toolkit';
import charactersReducer, { fetchCharacters, clearSelectedCharacter, selectCharacter } from '../redux/slices/charactersSlice'; // Adjust path if necessary

describe('charactersSlice', () => {
  const store = configureStore({ reducer: { characters: charactersReducer } });

  it('should return the initial state', () => {
    expect(store.getState().characters).toEqual({
      characters: [],
      loading: false,
      error: null,
      selectedCharacter: null,
    });
  });

  it('should handle selectCharacter and clearSelectedCharacter', () => {
    const character = { name: 'Darth Vader', image: 'darth-vader.png' };

    // Dispatch selectCharacter action
    store.dispatch(selectCharacter(character));
    expect(store.getState().characters.selectedCharacter).toEqual(character);

    // Dispatch clearSelectedCharacter action
    store.dispatch(clearSelectedCharacter());
    expect(store.getState().characters.selectedCharacter).toBeNull();
  });

  it('should handle fetchCharacters async thunk', async () => {
    // Mock the API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [{ name: 'Luke Skywalker' }] }),
      })
    ) as jest.Mock;

    await store.dispatch(fetchCharacters(1));
    expect(store.getState().characters.characters).toEqual([{ name: 'Luke Skywalker' }]);
    expect(store.getState().characters.loading).toBeFalsy();
    expect(store.getState().characters.error).toBeNull();
  });

  it('should handle fetchCharacters rejected state', async () => {
    // Mock the API rejection
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch'))) as jest.Mock;

    await store.dispatch(fetchCharacters(1));
    expect(store.getState().characters.loading).toBeFalsy();
    expect(store.getState().characters.error).toEqual('Failed to fetch characters');
  });
});
