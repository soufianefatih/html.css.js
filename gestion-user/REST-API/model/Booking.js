module.exports = (db, type) => {
    return db.define("bookings", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date_from: {
            type: type.STRING,
            allowNull: false,
        },
        days: {
            type: type.INTEGER,
            allowNull: false,
        },
        total_price: {
            type: type.INTEGER,
            allowNull: false,
        },
        status: {
            type: type.INTEGER,
            allowNull: false,
        },
    });
};