/**
 *
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    stripeId: {
      type: DataTypes.STRING,
    },
  })
  return Transaction
}
