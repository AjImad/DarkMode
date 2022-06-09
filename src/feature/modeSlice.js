import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "dark"
}

const modeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.mode = action.payload.mode
        }
    }
});

export const { toggleDarkMode } = modeSlice.actions;

export default modeSlice.reducer;