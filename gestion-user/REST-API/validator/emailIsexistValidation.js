// Custom validator function to check if the email is unique
const isUniqueEmail = async (value, helpers, next) => {
    try {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        const errorMessage = "Email is already in use by another user.";
        throw HttpError(409, errorMessage);
      }
      return value;
    } catch (error) {
      console.error("isUniqueEmail error:", error);
      // You can handle the error here or throw it to be caught in the calling function
      return Promise.reject(error);
    }
  };
  
  // const isUniqueEmail = async (value, { req }) => {
  //   try {
  //     const existingUser = await User.findOne({ email: value });
  //     if (existingUser && existingUser._id.toString() !== req.body._id) {
  //       return Promise.reject(message.emailInvalid);
  //     }
  //     return value;
  //   } catch (error) {
  //     return Promise.reject(message.emailInvalid);
  //   }
  // };
  