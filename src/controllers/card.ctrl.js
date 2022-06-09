/**
 * @description Controlador de tarjetas
 */

//Services
const { createCardToken } = require('../services/stripe.srv')

const create = async (req, res, next) => {
  try {
    const { Card } = global.db
    const card = req.body

    //Encriptamos la tarjeta usando una funcion de Stripe
    const tokenCard = await createCardToken(card)

    const result = await Card.create({
      cardStripeId: tokenCard,
      userId: req.userId,
    })
    res.json({ success: true, card: result })
  } catch (error) {
    next(error)
  }
}

const listCardsByUser = async (req, res, next) => {
  try {
    const { Card } = global.db
    const { userId } = req.params
    const result = await Card.findAll({ where: { userId } })
    res.json({ success: true, card: result })
  } catch (error) {
    next(error)
  }
}

const card = async (req, res, next) => {
  try {
    const { Card } = global.db
    const { id } = req.params
    const result = await Card.findByPk(id)
    res.json({ success: true, card: result })
  } catch (error) {
    next(error)
  }
}

module.exports = { create, listCardsByUser, card }
