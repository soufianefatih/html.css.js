const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

// const register = async (req, res,next) => {
//   let data = req.body;
//   const { value, error } = authSchema.registerSchema.validate(req.body, {
//     abortEarly: false,
//   });
  
// try{ 
//   console.log('value',{ value, error });
//   console.log('body',data);

//   const { name, email, password,role} = value;

//   if (error) BadRequestError(error);

//   const userEmail = await User.findOne({ email });
 
//   if (userEmail) res.status(409).json({ message:"Email has already in use"});
//   if(value.role == 'admin') res.status(400).json({message: 'this role is not available!'})

  
//     const result = await User.create({
//       name,
//       email,
//       password,
//       role ,
//     });
  
//       res.status(201).json(result);
//    } catch (err) {

//         res.status(400).json({ message: error.details[0].message });
//         console.log('error',error.details[0].message);

//    }

  
// };



const registera = async (req, res, next) => {
  try {
    const { value, error } = authSchema.registerSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new BadRequestError(error.details.map((detail) => detail.message));
    }

    const { name, email, password, role } = value;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(409).json({ message: "Email is already in use" });
    }

    if (role === 'admin') {
      return res.status(400).json({ message: 'The "admin" role is not available' });
    }

    const result = await User.create({
      name,
      email,
      password,
      role,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
};





const register = async (req, res, next) => {
  try {
    const { value, error } = authSchema.registerSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new BadRequestError(error.details.map((detail) => detail.message));
    }

    const { name, email, password } = value;

    // Set the role based on the condition (data.type)
    const role = data.type ? 'admin' : 'user';

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(409).json({ message: "Email is already in use" });
    }

    if (role === 'admin') {
      return res.status(400).json({ message: 'The "admin" role is not available' });
    }

    const result = await User.create({
      name,
      email,
      password,
      role,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
};

module.exports = register;
