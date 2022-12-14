import {createSlice} from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
  name: 'invoice', //this is actiontype
  initialState: {
    invoice: [],
  },
  reducers: {
    //addInvoice is actionType
    addInvoice: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

console.log(invoiceSlice);
// this is for dispatch
export const {addInvoice} = invoiceSlice.actions;

// this is for configureStore
export default invoiceSlice.reducer;
