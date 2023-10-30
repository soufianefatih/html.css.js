
const userRole = function(role){
  return (req, res, next) => {
      if (!role.includes(req.user.role)) {
          res.status(401).json({ message: 'you dont have access to this route!' })
      }
      next();    
  }
} 

module.exports = userRole