/**
 * @description Inicializar los modelos
 */

module.exports = (sequelize, DataTypes) => {
  //Models
  const User = require('./user.model')(sequelize, DataTypes)
  const Card = require('./card.model')(sequelize, DataTypes)
  const Product = require('./product.model')(sequelize, DataTypes)
  const Transaction = require('./transaction.model')(sequelize, DataTypes)

  Card.belongsTo(User, {
    foreignKey: 'userId',
  })
  Transaction.belongsTo(User, {
    foreignKey: 'userId',
  })
  Transaction.belongsTo(Card, {
    foreignKey: 'cardId',
  })
  Transaction.belongsTo(Product, {
    foreignKey: 'productId',
  })

  return {
    User,
    Card,
    Product,
    Transaction,
  }
}
