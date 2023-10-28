const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

const registera = async (req, res,next) => {
  let data = req.body;
  const { value, error } = authSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });
  
try{ 
  console.log('value',{ value, error });
  console.log('body',data);

  const { name, email, password,role} = value;

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

        res.status(400).json({ message: error.details[0].message });
        console.log('error',error.details[0].message);

   }

  
};



const register = async (req, res) => {
  let data = req.body;
  console.log(data);
  if(value.role == 'admin') res.status(400).json({message: 'this role is not available!'})

  const user = await User.create({
      'name': data.name,
      'email': data.email,
      'password': data.password,
      'role':  data.role ? 'admin' : 'user',
      
  })

  try {
      res.json(user);
  } catch (error) {
      res.status(500).send(error);    
  }
}


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