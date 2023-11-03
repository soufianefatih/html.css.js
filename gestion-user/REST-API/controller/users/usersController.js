const User = require("../../models/user");
const Actions = require("../../classes/Action");
const { userSchema } = require("../../schemas");
const { HttpError, BadRequestError,hashedPassword} = require("../../helpers");
const wrapFunction = require('../../decorators/wrapFunction')
const { isExistingUser,isUniqueEmail } = require('../../schemas/userSchema')
const asyncHandler = require('express-async-handler')



// * get all users
exports.all = asyncHandler(async (req, res) => {
  // let filters = req.query.filters || {};

try{
  // const users = await Actions.setModel(User).filters(filters).get();
  const users = await User.find();
  res.status(200).json(users);

}catch(error){
  res.status(400).send(error);
}


});

// * create new user
exports.create =  asyncHandler( async (req, res) => {
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


});


//* update user
 // Global unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionally handle the error or do any necessary cleanup
});


exports.update = asyncHandler(async (req, res, next) => {
  const { _id, email: oldEmail, name: oldName } = req.body;
  const id = _id;

  try {
    const { value, error } = await userSchema.updateSchema.validate(req.body, {
      abortEarly: false,
    });

    const newEmail = await value.email;

    await isExistingUser(id, req, res);
    await isUniqueEmail(id, req, res);

    if (error) {
      return res.status(400).json({ message: "Validation error", errors: error.details });      // throw  BadRequestError(error )
    }

    const { name = oldName, email = oldEmail, password, role } = value;
    const updatedUser = {
      name,
      email: newEmail,
      role,
    };

    if (password) {
      updatedUser.password = await hashedPassword(password);
    }

    const result = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
      select: "name email role",
    });

    res.json(result);
  } catch (error) {
    if (error.status === 409) {
      return res.status(409).json({ message: error.message});

    }else if(error.status === 404){
      return res.status(404).json({ message: error.message});

    } else {
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
});

