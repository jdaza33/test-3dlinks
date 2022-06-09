/**
 * @description Controlador de producto
 */

const create = async (req, res, next) => {
  try {
    const { Product } = global.db
    const product = req.body
    const result = await Product.create(product)
    res.json({ success: true, product: result })
  } catch (error) {
    next(error)
  }
}

const list = async (req, res, next) => {
  try {
    const { Product } = global.db
    const result = await Product.findAll()
    res.json({ success: true, product: result })
  } catch (error) {
    next(error)
  }
}

const product = async (req, res, next) => {
  try {
    const { Product } = global.db
    const { id } = req.params
    const result = await Product.findByPk(id)
    res.json({ success: true, product: result })
  } catch (error) {
    next(error)
  }
}

module.exports = { create, list, product }
