const mongoose=require('mongoose')
const schema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "Please Enter name"],
  },

  email: {
    type: "String",
    required: [true, "Please Enter name"],
    unique: true,
  },
});
module.exports = mongoose.model("User", schema);
