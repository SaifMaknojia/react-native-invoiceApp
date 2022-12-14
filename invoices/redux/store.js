import invoiceSlice from './slice/InvoiceSlice';

import {configureStore} from '@reduxjs/toolkit';
import invoiceDetailSlice from './slice/InvoiceDetailSlice';

const store = configureStore({
  reducer: {
    allUserInvoices: invoiceSlice,
    individualInvoice: invoiceDetailSlice,
  },
});
export default store;
