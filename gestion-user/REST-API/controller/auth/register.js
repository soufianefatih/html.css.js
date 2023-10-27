const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

const register = async (req, res) => {

  const { value, error } = authSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
try{ 
  console.log('value',{ value, error });
  console.log('body',req.body);

  const { name, email, password } = value;

  if (error) BadRequestError(error);

  const userEmail = await User.findOne({ email });
  if (userEmail) {
    // throw HttpError(409, "Email has already in use");
    res.json( 409, {
      message:"Email has already in use",

    });

  }
    const result = await User.create({
      name,
      email,
      password,
    });
  
      res.status(201).json(result);
   } catch (errr) {

        res.json(400,{ message: error.details[0].message });
        console.log('error',error.details[0].message);

   }

  
};



// const register = async (req, res) => {
//   let data = req.body;
//   console.log(data);

//   const user = await User.create({
//       'name': data.name,
//       'email': data.email,
//       'password': data.password,
      
//   })

//   try {
//       res.json(user);
//   } catch (error) {
//       res.status(500).send(error);    
//   }
// }


module.exports = register;


// exports.register = async (req, res) => {
//   let data = req.body;
//   if(data.role == 'admin') res.status(400).json({message: 'this role is not available!'})

//   const user = await User.create({
//       'name': data.name,
//       'email': data.email,
//       'password': data.password,
      
//   })

//   try {
//       res.json(user);
//   } catch (error) {
//       res.status(500).send(error);    
//   }
// }