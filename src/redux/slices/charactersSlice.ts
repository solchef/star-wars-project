import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersState } from '../../types';

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
  selectedCharacter: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data.results;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    clearSelectedCharacter: (state) => {
      state.selectedCharacter = null;
    },
    selectCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.loading = false;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch characters';
      });
  },
});

export const { clearSelectedCharacter, selectCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
