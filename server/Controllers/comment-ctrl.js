const Comments = require("../Models/comment-model");


const GetAllComments = async (req, res) => {
  await Comments.find().populate('UserId')
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};


const GetAllIdeaComments = async (req, res) => {
    await Comments.find({IdeaId:req.params.IdeaId}).populate('UserId')
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  

const GetCommentById = async (req, res) => {
  await Comments.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const AddComment = async (req, res) => {
  await Comments.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const UpdateComment = async (req, res) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ massage: "Cannot Update Comment!" });
    });
};

const DeleteComment = async (req, res) => {
  Comments.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    res
      .status(201)
      .json({
        success: true,
        data: result,
        message: "Comment Was Deleted Succesfully!",
      });
  });
};

module.exports = {
  GetAllComments,
  GetCommentById,
  AddComment,
  UpdateComment,
  DeleteComment,
  GetAllIdeaComments
};


