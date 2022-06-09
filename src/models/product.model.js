/**
 *
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  })
  return Product
}
