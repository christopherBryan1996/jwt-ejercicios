require('dotenv').config()

module.exports ={
    //configuraciones de db
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    //configuracion auth
    secret: process.env.AUTH_SECRET,
    expires: process.env.AUTH_EXPIRE,
    rounds: process.env.AUTH_ROUNDS
}