const companyCRUD = require('../Controllers/company-ctrl');
const companyRouter = require('express').Router();

companyRouter.get('/',companyCRUD.GetAllCompanies);
companyRouter.get('/:id',companyCRUD.GetCompanyById);
companyRouter.post('/',companyCRUD.AddCompany);
companyRouter.put('/:id',companyCRUD.UpdateCompany);
companyRouter.delete('/:id',companyCRUD.DeleteCompany);

module.exports = companyRouter;
