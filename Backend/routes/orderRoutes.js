const express = require("express");
const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");
const { newOrder, getSingleOrder, getAllOrders, myOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const router = express.Router();

router.route("/orders/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, authorizedRoles("admin"), getSingleOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)
router.route("/admin/orders").get(isAuthenticatedUser, authorizedRoles("admin"), getAllOrders)
router.route("/admin/orders/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder)
router.route("/admin/orders/:id").delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder)

module.exports = router;