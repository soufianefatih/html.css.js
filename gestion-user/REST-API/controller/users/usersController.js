const User = require("../../models/user");
const Actions = require("../../classes/Action");
const { userSchema } = require("../../schemas");
const { HttpError, BadRequestError,hashedPassword} = require("../../helpers");



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


//* update user

exports.update = async (req, res) => {
  try {
    const { _id, email: oldEmail, name: oldName } = req.body;
    console.log('usssss', req.body._id);
    const { value, error } = userSchema.updateSchema.validate(req.body, {
      abortEarly: false,
    });

    // Validate if _id is provided
    const id = req.body._id;
    const findemail = req.body.email
    if (!id) {
      return res.status(400).json({ message: '_id is required in the request body' });
    }

    // Update user based on _id
    const user = await User.findById(id);

    // Check if user with the given _id exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // check email is exist
    const userEmail = await User.findOne({findemail});
 
    if (!userEmail){
      return res.status(409).json({ message:"Email has already in use"});
    } 

    if (error) {
      return res.status(400).json({ message: "Validation error", errors: error.details });
    }

    const { name = oldName, email= oldEmail, password, role = oldRole } = value;
    const updatedUser = {
      name,
      email,
      role,
    };

    if (password) {
      updatedUser.password = await hashedPassword(password);
    }

    const result = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
      select: "name email role",
    });

    res.json(result); // Move the response here outside of the conditions
  } catch (err) {
     // Log the error for debugging
     console.error(err);

    // If the error is due to an incorrect or missing _id, handle it separately
    if (err.message.includes('_id is required')) {
      return res.status(400).json({ message: '_id is required in the request body' });
    }

    // If the error is due to user not found, handle it separately
    if (err.message.includes('User not found')) {
      return res.status(404).json({ message: 'User not found' });
    }

     if (err.message.includes('Email has already')) {
      return res.status(409).json({ message: 'Email has already in use' });
    }

    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.updateProfileuser = async (req, res) => {
  try {
    const { _id, email: oldEmail, name: oldName } = req.user;
    console.log('usssss', req.user);
    const { value, error } = userSchema.updateSchema.validate(req.body, {
      abortEarly: false,
    });

    // Validate if _id is provided
    const id = req.body._id;
    if (!id) {
      return res.status(400).json({ message: '_id is required in the request body' });
    }

    // Update user based on _id
    const user = await User.findById(id);

    // Check if user with the given _id exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (error) {
      return res.status(400).json({ message: "Validation error", errors: error.details });
    }

    const { name = oldName, email, password, role = oldRole } = value;
    const updatedUser = {
      name,
      role,
    };

    if (password) {
      updatedUser.password = await hashedPassword(password);
    }

    if (email && email !== oldEmail) {
      updatedUser.email = email;
    }

    const result = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
      select: "name email role",
    });

    res.json(result); // Move the response here outside of the conditions
  } catch (err) {
    // If the error is due to an incorrect or missing _id, handle it separately
    if (err.message.includes('_id is required')) {
      return res.status(400).json({ message: '_id is required in the request body' });
    }

    // If the error is due to user not found, handle it separately
    if (err.message.includes('User not found')) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
