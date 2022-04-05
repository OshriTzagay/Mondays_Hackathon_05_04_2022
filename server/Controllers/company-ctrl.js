const Company = require("../Models/company-model");


const GetAllCompanies = async (req, res) => {
  await Company.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const GetCompanyById = async (req, res) => {
  await Company.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};
const AddCompany = async(req, res)=>{
    await Company.create(req.body)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };


const UpdateCompany = async (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ massage: "Cannot Update Company!" });
    });
};

const DeleteCompany = async (req, res) => {
  Company.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    res.status(201).json({
      success: true,
      data: result,
      message: "Company Was Deleted Succesfully!",
    });
  });
};

module.exports = {
    GetAllCompanies,
    GetCompanyById,
    AddCompany,
    UpdateCompany,
    DeleteCompany,
};
