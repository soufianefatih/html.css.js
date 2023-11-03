const { User } = require("../../models");
const {  userSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");
const asyncHandler = require('express-async-handler')
const {isUniqueEmail } = require('../../schemas/userSchema')



const register = asyncHandler(async (req, res) => {
  try{ 
  const { value, error } =  userSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
  console.log('value',{ value, error });

  const { name, email, password} = value;
  
  // Set the role based on the condition (data.type)
     const data = req.body
      const role = data.type ? 'admin' : 'user';

      if (error) {
        return res.status(400).json({ message: "Validation error", errors: error.details });      // throw  BadRequestError(error )
      }   
  const newEmail = await value.email;
  await isUniqueEmail(id, req, res);


  if(value.role == 'admin') throw HttpError(400,'this role is not available!');
  
    const result = await User.create({
      name,
      email,
      password,
      role ,
    });
  
      res.status(201).json(result);

  }catch (error) {
    if (error.status === 409) {
      return res.status(409).json({ message: error.message});

    } else {
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
 
});








module.exports = register;
