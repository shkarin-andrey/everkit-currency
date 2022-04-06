import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    actionFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {state.actionFilter = action.payload},
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filtersChanged,
} = actions;