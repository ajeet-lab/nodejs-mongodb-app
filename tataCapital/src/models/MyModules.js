const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    loanId : { type: String },
    loanAcccountNo: { type: String},
    fetchAllCharges: { type: String },
    tenantId: { type: Number},
    considerLPPComputation: { type: String }
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
