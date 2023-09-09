import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'de',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const langActions = langSlice.actions;
export default langSlice.reducer;