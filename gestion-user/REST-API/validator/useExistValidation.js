// Custom validator function to check if the user with _id exists
const isExistingUser = async (value, helpers) => {
    try {
      const existingUser = await User.findById(value);
      if (!existingUser) {
        const errorMessage = "User not found";
        throw HttpError(404, errorMessage);
      }
      return value;
    } catch (error) {
      console.error("isExistingUser error:", error); // You can handle the error here or throw it to be caught in the calling function
     return Promise.reject(error);  }
  };