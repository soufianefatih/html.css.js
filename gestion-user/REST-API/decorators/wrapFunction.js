const ctrlWrapper = require('../../decorators/error');

const wrapFunction = (func) => ctrlWrapper(async (req, res) => {
  try {
    await func(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = wrapFunction;