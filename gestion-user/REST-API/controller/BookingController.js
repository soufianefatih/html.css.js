const { Booking, BookingCars, User } = require("../model");

/* -------create reservation by client----- */

exports.create = async (req, res) => {
  let data = req.body;
  console.log(data);
  let total = 0;
  const booking = await Booking.create({
    date_from: data.date_from,
    days: data.days,
    total_price: total,
    status: 0,
    client_id: req.user.id ?? 1,
  });
  data.BookingCars.forEach(async (bookings) => {
    try {
      await BookingCars.create({
        quantity: 1,
        price: bookings.price,
        total: 1 * bookings.price,
        booking_id: booking.id,
        cars_id: bookings.id,
      });

      total += 1 * bookings.price;

      await Booking.update(
        {
          total_price: total * data.days,
        },
        {
          where: {
            id: booking.id,
          },
        }
      );
    } catch (error) {
      console.log("error : ", error);
    }
  });

  res.json({
    booking: booking,
  });
};

/* -------get All booking with info booking /client/cars/bookingCars ----- */

exports.all = async (req, res) => {
  const booking = await Booking.findAll({
    include: ["client", "cars"],
  });

  res.json(booking);
};

/* -------get one booking  ----- */

exports.ById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    res.json(booking);
  } catch (error) {
    res.status(400).send(error);
  }
};

/* -------get ONe booking with info booking /client/cars/bookingcars----- */

exports.Onebooking = async (req, res) => {
  const id = req.params.booking_id;
  try {
    const booking = await Booking.findOne({
      include: ["client", "cars"],
      where: { id: id },
    });
    res.json(booking.toJSON());
  } catch (error) {
    res.status(400).json(error);
  }
};

/* -------get all booking by user id created----- */

exports.all_booking = async (req, res) => {
  const booking = await Booking.findAll({
    where: { client_id: req.user.id },
  });

  res.status(200).json(booking);
};

/* -------update booking by client ----- */

exports.update = async (req, res) => {
  let data = req.body;
  const booking = await Booking.update(
    {
      date_from: data.date_from,
      days: data.days,
    },

    { where: { id: req.params.id, status: 0 } }
  );

  res.status(200).send({ message: "update successfully ", booking });
};

/* -------confirm  status booking ----- */

exports.confirm = async (req, res) => {
  try {
    const confirmer = await Booking.update(
      {
        status: 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).send({ message: "change successfully ", confirmer });
  } catch {
    res.status(400).json("status is not confirm");
  }
};
