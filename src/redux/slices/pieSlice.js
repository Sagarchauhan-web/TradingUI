import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const pieSlice = createSlice({
  name: 'pie',
  initialState: [],
  reducers: {
    addRow: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: () => {
        let id = uuid().slice(0, 8);
        return {
          payload: {
            id: id,
            dropDown: false,
            percentage: 3,
          },
        };
      },
    },
    Percentage: (state, action) => {
      const { operation, id } = action.payload;
      const object = state.find((val) => val.id === id);
      if (operation === 'plus' && object.percentage < 100) {
        object.percentage++;
      } else if (operation === 'minus' && object.percentage > 1) {
        object.percentage--;
      }
    },
    toggleDropDown: (state, action) => {
      let object = state.find((val) => val.id === action.payload);
      object.dropDown = !object.dropDown;
    },
    closeAllOptions: (state) => {
      state.map((val) => (val.dropDown = false));
    },
    deleteRow: (state, action) => {
      const index = state.findIndex((val) => val.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const {
  addRow,
  Percentage,
  toggleDropDown,
  closeAllOptions,
  deleteRow,
} = pieSlice.actions;

export default pieSlice.reducer;
