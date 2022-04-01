require('dotenv').config()
module.exports= {
  //configuracion de db
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  
  //configuraciones Seeds
  seederStorage:'sequelize',
  seederStorageTableName: 'seedx',

  //configuraciones de migrations
  migrationsStore: 'sequelize',
  migrationsStoreTableName:'migrations'
}
