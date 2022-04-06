import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    actionToken: ''
}

const tokenSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        tokenChanged: (state, action) => {state.actionToken = action.payload},
    }
});

const {actions, reducer} = tokenSlice;

export default reducer;
export const {
    tokenChanged,
} = actions;