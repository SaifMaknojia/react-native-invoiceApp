const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema(
  {
    id: "RT3080",
    createdAt: "2021-08-18",
    paymentDue: "2021-08-19",
    description: "Re-branding",
    paymentTerms: 1,
    status: "paid",
  },
  { timestamps: true }
);
const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;
