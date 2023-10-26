module.exports = (db, type) => {
    return db.define("categorys", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        type: {
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