const { User } = require("../../models");
const {  userSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

const register = async (req, res) => {
  const { value, error } =  userSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
  console.log('value',{ value, error });

  const { name, email, password} = value;
  
  // Set the role based on the condition (data.type)
     const data = req.body
      const role = data.type ? 'admin' : 'user';

  if (error) BadRequestError(error);

  const userEmail = await User.findOne({ email });
 
  if (userEmail)throw HttpError(409, "Email has already in use");

  if(value.role == 'admin') throw HttpError(400,'this role is not available!');
  
    const result = await User.create({
      name,
      email,
      password,
      role ,
    });
  
      res.status(201).json(result);
 


};








module.exports = register;
