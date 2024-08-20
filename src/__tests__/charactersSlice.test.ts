import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../redux/slices/charactersSlice'; // Adjust path if necessary

describe('charactersSlice', () => {
  const store = configureStore({ reducer: { characters: charactersReducer } });

  it('should return the initial state', () => {
    const initialState = { characters: [] };
    expect(store.getState().characters).toEqual(initialState);
  });

  // Add more tests here for actions and reducers
});
