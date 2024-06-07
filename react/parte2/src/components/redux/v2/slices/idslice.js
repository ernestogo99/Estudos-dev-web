//serve para acessar a variavel global
import { createSlice } from "@reduxjs/toolkit";

const initialstate = { value: 500 }; // id 100

export const idslice = createSlice({
  name: "id", //nome da fatia
  initialState: { value: initialstate },
  reducers: {
    incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementar, decrementar } = idslice.actions; //exportar as ações sobre oestado global
export default idslice.reducer;
