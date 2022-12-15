import invoiceSlice from './slice/InvoiceSlice';

import {configureStore} from '@reduxjs/toolkit';
import invoiceDetailSlice from './slice/InvoiceDetailSlice';
import newInvoiceSlice from './slice/NewInvoiceSlice';

const store = configureStore({
  reducer: {
    allUserInvoices: invoiceSlice,
    individualInvoice: invoiceDetailSlice,
    generateNewInvoice: newInvoiceSlice,
  },
});
export default store;
