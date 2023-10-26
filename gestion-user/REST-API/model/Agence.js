module.exports = (db, type) => {
    return db.define("agences", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: type.STRING,
            allowNull: false,
        },
        city: {
            type: type.STRING,
            allowNull: false,
        },
        description: {
            type: type.STRING,
            allowNull: false,
        },
        image: {
            type: type.STRING,
            allowNull: false,
        },
        user_id: {
            type: type.INTEGER,
            allowNull: false,
        }
    });
};