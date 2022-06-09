/**
 * @description Servicio de Stripe
 */

/**
 * @description Crea un token de una tarjeta
 * @param {Object} card {number, exp_month, exp_year, cvc}
 * @returns
 */
const createCardToken = (card) => {
  //Modules
  const stripe = require('stripe')(env.SECRET_KEY)

  return new Promise(async (resolve, reject) => {
    try {
      const { id } = await stripe.tokens.create({
        card,
      })
      return resolve(id)
    } catch (error) {
      return reject(error)
    }
  })
}

const payWithToken = (price, token) => {
  //Modules
  const stripe = require('stripe')(env.SECRET_KEY)

  return new Promise(async (resolve, reject) => {
    try {
      const { id } = await stripe.charges.create({
        amount: price * 1000,
        currency: 'usd',
        source: token,
        description: 'Compra',
      })
      console.log(id)
      return resolve(id)
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = { createCardToken, payWithToken }
