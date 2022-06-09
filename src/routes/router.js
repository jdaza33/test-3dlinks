/**
 * @description Rutas de endpoints
 */

//Modules
const express = require('express')
const route = express.Router()

//Middlewares
const { isAuth } = require('../middlewares/auth.middleware')

//Controllers
const userCtrl = require('../controllers/user.ctrl')
const productCtrl = require('../controllers/product.ctrl')
const cardCtrl = require('../controllers/card.ctrl')
const transactionCtrl = require('../controllers/transaction.ctrl')

//Endpoints

/** USERS */
route.post('/users/create', userCtrl.create)
route.get('/users/:id', userCtrl.user)
route.post('/users/list', userCtrl.list)
route.post('/users/login', userCtrl.login)

/** PRODUCTS */
route.post('/products/create', productCtrl.create)
route.get('/products/:id', productCtrl.product)
route.post('/products/list', productCtrl.list)

/** CARDS */
route.post('/cards/create', isAuth, cardCtrl.create)
route.get('/cards/:id', cardCtrl.card)
route.get('/cards/list-by-user/:userId', cardCtrl.listCardsByUser)

/** TRANSACTIONS */
route.post('/transactions/create', isAuth, transactionCtrl.create)

module.exports = route
