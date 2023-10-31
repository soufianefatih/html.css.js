const { User } = require("../../models");
const {  userSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

const register = async (req, res) => {
  const { value, error } =  userSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
try{ 
  console.log('value',{ value, error });

  const { name, email, password} = value;
  
  // Set the role based on the condition (data.type)
     const data = req.body
      const role = data.type ? 'admin' : 'user';

  if (error) BadRequestError(error);

  const userEmail = await User.findOne({ email });
 
  if (userEmail) res.status(409).json({ message:"Email has already in use"});
  if(value.role == 'admin') res.status(400).json({message: 'this role is not available!'})

  
    const result = await User.create({
      name,
      email,
      password,
      role ,
    });
  
      res.status(201).json(result);
   } catch (err) {

        res.status(400).json({message: 'Registration failed', err: error.details[0].message });
        console.log('error',error.details[0].message);

   }


};








module.exports = register;
