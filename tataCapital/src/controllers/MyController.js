const Loan = require("../models/MyModules");

function MyController(req, res) {

    return {
        async createLoans(req, res) {
            try {
                console.log(req.body);
                const { loanId, loanAcccountNo, fetchAllCharges, tenantId, considerLPPComputation } = req.body;
                const newLoan = new Loan({
                    "loanId": loanId, "loanAcccountNo": loanAcccountNo,
                    "fetchAllCharges": fetchAllCharges, "tenantId": tenantId, "considerLPPComputation": considerLPPComputation
                });
                const savedLoan = await newLoan.save();
                return res.json(savedLoan);
            } catch (e) {
                res.json({ "isSuccess": false, message: e.message });
            }

        },

        async getSingleLoan(req, res) {
            try {
                const { loanId, loanAcccountNo, fetchAllCharges, tenantId, considerLPPComputation } = req.body;
                const data ={ loanId, loanAcccountNo, fetchAllCharges, tenantId, considerLPPComputation }
                const projection = {'_id':0, '__v':0};
                const getData = await Loan.findOne(data, projection);
                if(getData == null || getData == ""){
                    return res.json({message: `Data not found of Loan Acccount No : ${loanAcccountNo}`});
                }
                
                return res.json(getData);
            } catch (e) {
                res.json({ "isSuccess": false, message: e.message });
            }

        },

        async getAllLoan(req, res) {
            try {
                const getData = await Loan.find({})
                return res.json(getData);
            } catch (e) {
                res.json({ "isSuccess": false, message: e.message });
            }
        }
    }
}

module.exports = MyController;