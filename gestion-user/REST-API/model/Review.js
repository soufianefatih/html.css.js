module.exports = (db, type) => {
    return db.define("reviews", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        texte: {
            type: type.STRING,
            allowNull: false,
        },
        agence_id: {
            type: type.INTEGER,
            allowNull: false,
        },
        status: {
            type: type.INTEGER,
        },
    });
};
