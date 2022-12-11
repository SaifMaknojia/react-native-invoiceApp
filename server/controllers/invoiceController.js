const Invoices = require("../models/invoiceModel");
const User = require("../models/user");

exports.getAllUserInvoice = async (req, res) => {
  try {
    const invoices = await Invoices.find({ userId: req.user.id });
    console.log(invoices);
    res.status(200).json({
      status: "success",
      results: invoices.length,
      invoices,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

exports.getIndividualUserInvoice = async (req, res) => {
  try {
    const invoice = await Invoices.findById(req.params.id);

    if (invoice) {
      res.status(200).json({
        status: "success",
        invoice: invoice,
      });
    } else {
      res.status(404).json({
        status: "Failed",
        message: "Invoice not found",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await Invoices.create(req.body);
    res.status(201).json({
      status: "success",
      invoice: invoice,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: `Something went wrong ${err}`,
    });
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const invoice = await Invoices.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "patch request onRoute",
      invoice,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: `Something went wrong ${err}`,
    });
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoices.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: `Something went wrong ${err}`,
    });
  }
};
