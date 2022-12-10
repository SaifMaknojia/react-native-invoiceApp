import invoiceSlice from './slice/InvoiceSlice';
import {configureStore} from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    allUserInvoices: invoiceSlice,
  },
});
export default store;
