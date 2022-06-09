/**
 * @description Controlador de usuario
 */

//Utils
const {
  encryptPassword,
  comparePassword,
  encodeUser,
} = require('../utils/security.util')

const create = async (req, res, next) => {
  try {
    const { User } = global.db
    const user = req.body

    //Encriptamos la clave
    user.password = encryptPassword(user.password)

    const result = await User.create(user)
    res.json({ success: true, user: result })
  } catch (error) {
    next(error)
  }
}

const list = async (req, res, next) => {
  try {
    const { User } = global.db
    const result = await User.findAll()
    res.json({ success: true, user: result })
  } catch (error) {
    next(error)
  }
}

const user = async (req, res, next) => {
  try {
    const { User } = global.db
    const { id } = req.params
    const result = await User.findByPk(id)
    res.json({ success: true, user: result })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { User } = global.db
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user)
      res.status(403).json({ success: false, message: 'El usuario no existe' })

    //Comparamos clave
    if (!comparePassword(password, user.password))
      res.status(403).json({ success: false, message: 'La clave no coincide' })

    res.json({ success: true, token: encodeUser(user.id) })
  } catch (error) {
    next(error)
  }
}

module.exports = { create, list, user, login }
