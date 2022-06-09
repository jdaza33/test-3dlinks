/**
 *
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('card', {
    cardStripeId: {
      type: DataTypes.STRING,
    },
  })
  return Card
}
