// import sequelize & schemas
const Sequelize = require("sequelize");
const db = require("../config/database");
const UserModel = require("./User");
const AgenceModel = require("./Agence");
const CarsModel = require("./Cars");
const CategoryModel = require("./Category");
const BookingModel = require("./Booking");
const BookingcarsModel = require("./BookingCars");
const ReviewModel = require("./Review");




// Gen Model in database
const User = UserModel(db, Sequelize);
const Agence = AgenceModel(db, Sequelize);
const Cars = CarsModel(db, Sequelize);
const Category = CategoryModel(db, Sequelize);
const Booking = BookingModel(db, Sequelize);
const BookingCars = BookingcarsModel(db, Sequelize);
const Review = ReviewModel(db, Sequelize);




// relation between agence and category  one to many

Agence.hasMany(
  Category,

  { foreignKey: "agence_id" }
);

Category.belongsTo(
  Agence,

  { as: "agence", foreignKey: "agence_id" }
);

// relation between cars and category  one to many

Category.hasMany(
  Cars,

  { foreignKey: "category_id" }
);

Cars.belongsTo(
  Category,

  { as: "category", foreignKey: "category_id" }
);

//  relation betwen user and booking one to many

User.hasMany(Booking, { foreignKey: "client_id" });
Booking.belongsTo(User, { as: "client", foreignKey: "client_id" });

// relation between cars //  booking  many to many

Cars.belongsToMany(Booking, {
  through: BookingCars,
  as: "bookings",
  foreignKey: "cars_id",
});

Booking.belongsToMany(Cars, {
  through:BookingCars,
  as: "cars",
  foreignKey: "booking_id",
});

// relation between review // client one to many

User.hasMany(Review,{foreignKey: "client_id" });
Review.belongsTo(User, { as: "client", foreignKey: "client_id" });

// Create table of model
db.sync({ alter: true }).then(() => {
  console.log("Table Created !");
});

module.exports = {
  User,
  Cars,
  Agence,
  Category,
  Booking,
  BookingCars,
  Review
};
