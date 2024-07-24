import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("language_goldenCorner")
    ? localStorage.getItem("language_goldenCorner")
    : "ar",
};

const lang_reducer = createSlice({
  initialState,
  name: "language",
  reducers: {
    updateLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("language_goldenCorner", action.payload);
    },
  },
});

export const { updateLanguage } = lang_reducer.actions;
export default lang_reducer.reducer;
