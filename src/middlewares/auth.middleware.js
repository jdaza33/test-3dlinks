/**
 * @description Manejo de middlewares
 */

//Utils
const { decodeToken } = require('../utils/security.util')

/**
 * @description Comprueba si el token es valido y no ha expirado
 */
async function isAuth(req, res, next) {
  try {
    // La cabecera de autorización tiene el formato: "<bearer> <token>"
    let token = req.headers.authorization
    if (!token)
      return res.status(403).json({
        success: 0,
        message: 'No existe un token de autorización',
      })
    else token = req.headers.authorization.split(' ')[1]

    const { id: userId, exp: expToken } = decodeToken(token)

    if (userId) {
      if (expToken < Date.now())
        return res.status(403).json({
          success: 0,
          message: 'El token ya expiró',
        })

      req.userId = userId
      next()
    }
  } catch (error) {
    console.log(error)
    return res.status(403).json({
      success: 0,
      message: 'Error al validar token de authenticate',
    })
  }
}

module.exports = { isAuth }
