const Pet = require("../models/pet.model");

module.exports.createPet = (req, res) => {
  const {
    name,
    type,
    description,
    firstskill,
    secskill,
    thirdskill,
  } = req.body;
  Pet.create({
    name,
    type,
    description,
    firstskill,
    secskill,
    thirdskill,
  })
  .then((pet)=> res.json(pet))
  .catch(err => res.status(400).json(err))
};
module.exports.getAllPets= (req,res)=>{
    Pet.find().sort({type: 'desc'}) //for sorting byt type(Dogs then Cats)
    .then(pets=> res.json(pets))
    .catch(err=> res.json(err))
}
module.exports.getOnePet = (req,res)=>{
    Pet.findById({_id: req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}
module.exports.updatePet = (req,res)=> {
   
    Pet.findByIdAndUpdate({_id:  req.params.id} , req.body ,{new:true , runValidators:true})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}
module.exports.deletePet = (req,res) => {
        Pet.findByIdAndRemove({_id: req.params.id})
        .then(pet=> res.json(pet))
        .catch(err => res.json(err))
}