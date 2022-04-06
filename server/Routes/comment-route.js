const commentsCRUD = require('../Controllers/comment-ctrl');
const commentRouter = require('express').Router();

commentRouter.get('/',commentsCRUD.GetAllComments);
commentRouter.get('/:id',commentsCRUD.GetCommentById);
commentRouter.get('/idea/:id',commentsCRUD.GetAllIdeaComments);
commentRouter.post('/',commentsCRUD.AddComment);
commentRouter.put('/:id',commentsCRUD.UpdateComment);
commentRouter.delete('/:id',commentsCRUD.DeleteComment);

module.exports = commentRouter;

