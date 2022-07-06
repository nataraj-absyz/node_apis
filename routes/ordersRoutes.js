const express = require('express');
const orderControllers = require('')
const router = express.Router();

//@route GET && POST - /orders/

router
    .route("/")
    .get(orderControllers.getAllOrders)
    .post(orderControllers.createNewOrder)

router
    .route("/:id")
    .post(orderControllers.getOrderById)

module.exports = router;





















// const express = require('express');
// const orderControllers = require('../contorllers/ordersControllers');
// const router = express.Router();

// // @route GET && POST - /posts/
// router
//     .route("/")
//     .get(orderControllers.getAllUsers)
//     .post(orderControllers.createNewUser)

// router
//     .route("/:id")
//     .get(orderControllers.getUserById)


// module.exports = router;