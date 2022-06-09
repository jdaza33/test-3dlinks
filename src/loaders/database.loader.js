/**
 * @description Conexion a la base de datos de PostgresSQL
 */

const { Sequelize, DataTypes } = require('sequelize')

const connectToDatabase = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const sequelize = new Sequelize(env.URL_DATABASE)

      await sequelize.authenticate()
      logger.info(`Base de datos conectada con éxito`)

      const models = await initModels(sequelize)
      logger.info(`Modelo de base de datos inicializado con éxito`)

      return resolve({ sequelize, Sequelize, ...models })
    } catch (error) {
      console.error('Error al conectar con la base de datos')
      return reject(error)
    }
  })
}

const initModels = (sequelize) => {
  return new Promise(async (resolve, reject) => {
    try {
      const models = require('../models/index')(sequelize, DataTypes)
      return resolve(models)
    } catch (error) {
      console.error('Error al inicializar modelo de base de datos')
      return reject(error)
    }
  })
}

module.exports = { connectToDatabase }
