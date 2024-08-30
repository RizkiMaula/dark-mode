import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    tabungan: 20000,
    darkMode: false,
  },
  reducers: {
    deposit(state, action) {
      state.tabungan += action.payload;
    },
    withdraw(state, action) {
      if (action.payload <= state.tabungan) {
        state.tabungan -= action.payload;
      }
    },
    darkMode(state, action) {
      state.darkMode = action.payload.darkMode;
      // console.log(action);
    },
  },
});

export const { deposit, withdraw, darkMode } = accountSlice.actions;
export default accountSlice.reducer;
