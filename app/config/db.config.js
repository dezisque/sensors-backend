module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "flamelf2",
    DB: "sensors",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};