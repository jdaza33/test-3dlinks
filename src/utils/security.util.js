/**
 * @description Utilidad para el manejo de seguridad, tokens y encriptacion
 */

'use strict'

// Modules
const bcrypt = require('bcryptjs')
const jwt = require('jwt-simple')
const moment = require('moment')

module.exports = {
  encryptPassword,
  comparePassword,
  encodeUser,
  decodeToken,
}

/**
 *
 * @param {String} password Clave sin encriptar
 * @returns
 */
function encryptPassword(password) {
  try {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {String} password Clave sin encriptar
 * @param {String} hash
 */
function comparePassword(password, hash) {
  try {
    return bcrypt.compareSync(password, hash)
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {String} userId Identificador del usuario
 */
function encodeUser(userId) {
  try {
    const payload = {
      id: userId,
      exp: moment().add(1, 'days').valueOf(), //Tiempo en Milisegundos
    }
    return jwt.encode(payload, env.SECRET_JWT)
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {String} token
 */
function decodeToken(token) {
  try {
    return jwt.decode(token, env.SECRET_JWT)
  } catch (error) {
    console.log(error)
  }
}
