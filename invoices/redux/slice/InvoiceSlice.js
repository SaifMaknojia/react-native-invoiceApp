import {createSlice} from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
  name: 'invoice', //this is actiontype
  initialState: {
    invoice: [],
  },
  reducers: {
    addInvoice: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

export const {addInvoice} = invoiceSlice.actions;

export default invoiceSlice.reducer;
