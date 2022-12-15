import {createSlice} from '@reduxjs/toolkit';

export const newInvoiceSlice = createSlice({
  name: 'newInvoice', //this is actiontype
  initialState: {
    isShown: false,
  },
  reducers: {
    addNewInvoice: (state, action) => {
      state.isShown = action.payload;
    },
  },
});

export const {addNewInvoice} = newInvoiceSlice.actions;

export default newInvoiceSlice.reducer;
