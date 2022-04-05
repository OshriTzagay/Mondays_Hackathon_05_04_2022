const companyCRUD = require('../Controllers/company-ctrl');
const commentRouter = require('express').Router();

ideaRouter.get('/',IdeasCRUD.GetAllIdeas);
ideaRouter.get('/:id',IdeasCRUD.GetIdeaById);
ideaRouter.post('/:UserId',IdeasCRUD.AddIdea);
ideaRouter.put('/:id',IdeasCRUD.UpdateIdea);
ideaRouter.delete('/:id',IdeasCRUD.DeleteIdea);

module.exports = ideaRouter;