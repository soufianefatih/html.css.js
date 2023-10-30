const jwt = require("jsonwebtoken");

const virifylogin =  function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({message: "Acess Denied"});
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.json({ success: false, message: "Failed to authenticate token " });
    } else {
      req.user = user;
      next();
    }
  });
};


module.exports = virifylogin






// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     if (!token) {
//       return res.status(401).send({
//         message: "Auth failed",
//         success: false,
//       });
//     }
//     const decodedToken = jwt.verify(token, process.env.jwt_secret);
//     req.params.userId = decodedToken.userId;
//     next();
//   } catch (error) {
//     res.status(401).send({
//       message: "Auth failed",
//       success: false,
//     });
//   }
// };
