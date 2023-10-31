const User = require("../../models/user");
const Actions = require("../../classes/Action");
const { userSchema } = require("../../schemas");



// * get all users
exports.all = async (req, res) => {
  // let filters = req.query.filters || {};

try{
  // const users = await Actions.setModel(User).filters(filters).get();
  const users = await User.find();
  res.status(200).json(users);

}catch(error){
  res.status(400).send(error);
}


};

exports.create = async (req, res) => {
  let data = req.body;
  const user = await User.create({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
  });

  res.json(user);
};

exports.update = async (req, res) => {
  let data = req.body;
  const userUpdate = await User.findOneAndUpdate({ _id: req.params.id }, data, {
    returnDocument: "after",
  });

  res.json(userUpdate);
};

exports.ById = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
    
        res.json(users);
      } catch (error) {
        res.status(400).send(error);
      }
};

