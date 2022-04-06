import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeLanguage: 'ru'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        languageChanged: (state, action) => {state.activeLanguage = action.payload},
    }
});

const {actions, reducer} = languageSlice;

export default reducer;
export const {
    languageChanged,
} = actions;