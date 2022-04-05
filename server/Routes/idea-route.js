const IdeasCRUD = require('../Controllers/idea-ctrl');
const ideaRouter = require('express').Router();

ideaRouter.get('/',IdeasCRUD.GetAllIdeas);
ideaRouter.get('/:id',IdeasCRUD.GetIdeaById);
ideaRouter.get('/type/:type',IdeasCRUD.GetIdeasByType);
ideaRouter.post('/:UserId',IdeasCRUD.AddIdea);
ideaRouter.put('/:id',IdeasCRUD.UpdateIdea);
ideaRouter.delete('/:id',IdeasCRUD.DeleteIdea);

module.exports = ideaRouter;
