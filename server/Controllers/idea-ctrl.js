const Ideas = require("../Models/idea-model");
const User = require('../Models/user-model');


const GetAllIdeas = async (req, res) => {
  await Ideas.find()
    .populate("UserId")
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};
const GetIdeasByType = async (req, res) => {
  await Ideas.find({Category:req.params.type})
    .populate("UserId")
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const GetIdeaById = async (req, res) => {
  await Ideas.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};
const AddIdea = async(req, res)=>{
    console.log(req.body)
   await  Ideas.create(req.body)
    .then((data)=>{User.findOne({_id:req.params.UserId} )
    .then((user)=>{user.Ideas.push(data._id)
       user.save()})
     res.send(data)})
    .catch((err)=>res.send({message: err}))
  };


const UpdateIdea = async (req, res) => {
  Ideas.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ massage: "Cannot Update Idea!" });
    });
};

const DeleteIdea = async (req, res) => {
  Ideas.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    res.status(201).json({
      success: true,
      data: result,
      message: "Idea Was Deleted Succesfully!",
    });
  });
};

module.exports = {
  GetAllIdeas,
  GetIdeaById,
  AddIdea,
  UpdateIdea,
  DeleteIdea,
  GetIdeasByType
};
