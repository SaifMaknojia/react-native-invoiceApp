import {createSlice} from '@reduxjs/toolkit';

export const invoiceDetailSlice = createSlice({
  name: 'invoice', //this is actiontype
  initialState: {
    singleInvoice: {},
  },
  reducers: {
    //addInvoice is actionType
    individualInvoice: (state, action) => {
      state.singleInvoice = action.payload;
    },
  },
});

console.log(invoiceDetailSlice);
// this is for dispatch
export const {individualInvoice} = invoiceDetailSlice.actions;

// this is for configureStore
export default invoiceDetailSlice.reducer;
