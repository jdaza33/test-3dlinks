/**
 * @description
 */

//Loaders
const { startDotenv } = require('./dotenv.loader')
const { startLogger } = require('./logger.loader')
const { startExpress } = require('./server.loader')
const { connectToDatabase } = require('./database.loader')

const init = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await startDotenv()
      await startLogger()
      const db = await connectToDatabase()
      global.db = db
      db.sequelize.sync()

      const app = await startExpress()

      return resolve(app)
    } catch (error) {
      return reject(error)
    }
  })
}

init()
  .then((app) => {
    app.listen(3001, () => {
      logger.info(`Servidor iniciado en el puerto 3001`)
    })
  })
  .catch((err) => {
    console.log(err)
    throw new Error(err)
  })
