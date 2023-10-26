   module.exports = (db, type) => {
    return db.define("cars", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        marque: {
            type: type.STRING,
            allowNull: false,
        },
        model: {
            type: type.STRING,
            allowNull: false,
        },
        price: {
            type: type.STRING,
            allowNull: false,
        },
        image: {
            type: type.STRING,
            allowNull: false,
        },
        status: {
            type: type.INTEGER,
        },
        user_id: {
            type: type.INTEGER,
            allowNull: false,
        }
    });
};
