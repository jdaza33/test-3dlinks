/**
 * @description Controlador de transacciones
 */

//Services
const { payWithToken } = require('../services/stripe.srv')

const create = async (req, res, next) => {
  try {
    const { Transaction, Product, Card } = global.db
    const { cardId, productId, quantity } = req.body

    //Verificamos que la tarjeta sea del usuario que hace la peticion
    const card = await Card.findOne({
      where: { id: cardId, userId: req.userId },
    })

    if (!card)
      res.status(403).json({
        success: false,
        message: 'La tarjeta no se encuentra o no coincide el usuario.',
      })

    //Buscamos el producto
    const product = await Product.findByPk(productId)

    if (!product)
      res.status(403).json({
        success: false,
        message: 'El producto no existe',
      })

    //Hacemos el cargo de la tarjeta con Stripe
    const tokenCharge = await payWithToken(product.price, card.cardStripeId)

    const result = await Transaction.create({
      userId: req.userId,
      cardId,
      productId,
      stripeId: tokenCharge,
      price: product.price,
      quantity,
    })
    res.json({ success: true, transaction: result })
  } catch (error) {
    next(error)
  }
}

module.exports = { create }
