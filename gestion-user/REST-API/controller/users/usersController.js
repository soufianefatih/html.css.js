const User = require("../../models/user");
const Actions = require("../../classes/Action");
const { userSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");



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

// * create new user
exports.create = async (req, res) => {
  const { value, error } = userSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
try{ 
  console.log('value',{ value, error });

  const { name, email, password,role} = value;
  

  if (error) BadRequestError(error);

  const userEmail = await User.findOne({ email });
 
  if (userEmail) res.status(409).json({ message:"Email has already in use"});
  
    const result = await User.create({
      name,
      email,
      password,
      role ,
    });
  
      res.status(201).json(result);
   } catch (err) {

        res.status(400).json({message: 'Created failed', err: error.details[0].message });
        console.log('error',error.details[0].message);

   }


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

