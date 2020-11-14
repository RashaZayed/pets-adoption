const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "make sure name has 3 characters or more"],
    required: [true, "Name is required"],
  },
  type: {
    type: String,
    minlength: [3, "make sure the type has 3 characters or more"],
    required: [true, "Type of the pet is required"],
  },
  description: {
    type: String,
    minlength: [3, "make sure the description has 3 characters or more"],
    required: [true, " Description of the pet is required"],
  },

  firstskill: {
    type: String,
  },
  secskill: {
    type: String,
  },
  thirdskill: {
    type: String,
  },
}, {timestamps: true});

const Pet = mongoose.model("Pet" , PetSchema);
module.exports = Pet;
