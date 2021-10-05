require('dotenv').config()

module.exports ={
    //configuraciones de db
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    //configuraciones Seeds
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds'
}