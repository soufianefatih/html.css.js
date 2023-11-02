const ctrlWrapper = require('./ctrlWrapper');

// const wrapFunction = (func) => ctrlWrapper(async (req, res) => {
//   try {
//     await func(req, res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

const wrapFunction = (func) => ctrlWrapper(async (req, res) => {
  try {
    await func(req, res);
  } catch (error) {
    console.error(error);

    // Customize error messages based on error type
    if (error.name === 'ValidationError') {
      // Handle validation errors (e.g., userSchema validation)
      res.status(400).json({ message: 'Validation error', errors: error.details });
    } else if (error.name === 'MongoError' && error.code === 11000) {
      // Handle MongoDB duplicate key error (e.g., duplicate email)
      res.status(409).json({ message: 'Duplicate key error', errors: error.message });
    } else {
      // Generic internal server error
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

module.exports = wrapFunction;