import {createSlice} from '@reduxjs/toolkit';

export const invoiceDetailSlice = createSlice({
  name: 'invoice',
  initialState: {
    singleInvoice: {},
  },
  reducers: {
    individualInvoice: (state, action) => {
      state.singleInvoice = action.payload;
    },
  },
});

export const {individualInvoice} = invoiceDetailSlice.actions;

export default invoiceDetailSlice.reducer;
