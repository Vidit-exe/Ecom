const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");

// Create new Order
exports.newOrder = catchAsyncErrors ( async (req, res, next) => {
    
    const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paidAt: Date.now(), user: req.user._id
    })

    res.status(201).json({
        success: true,
        order
    })
})

// Get Single Order
exports.getSingleOrder = catchAsyncErrors( async (req, res, next) => {

    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new ErrorHandler("Order Not Found!", 404));
    }

    res.status(200).json({
        success: true,
        order,
        message: "Order fetched successfully!"
    })
})

// Get logged in users orders
exports.myOrders = catchAsyncErrors( async (req, res, next) => {

    const orders = await Order.find({ user: req.user.id });

    if (!orders) {
        return next(new ErrorHandler("Order Not Found!", 404));
    }

    res.status(200).json({
        success: true,
        orders,
        message: "Order fetched successfully!"
    })
})

// Get all orders
exports.getAllOrders = catchAsyncErrors( async (req, res, next) => {

    const orders = await Order.find();

    if (!orders) {
        return next(new ErrorHandler("Orders Not Found!", 404));
    }

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice
    })
    

    res.status(200).json({
        success: true,
        orders,
        totalAmount,
        message: "Order fetched successfully!"
    })
})

//Update Order Status Admin
exports.updateOrder = catchAsyncErrors( async (req, res, next) => {
    
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Orders Not Found!", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHandler("You have already delivered this order.", 400))
    }

    await Promise.all(
        order.orderItems.map(async(o) => {
            await updateStock(o.product, o.quantity)
        })
    )


    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    
    res.status(200).json({
        success: true,
        message: "Order updated successfully!"
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    
    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false })
}

//Delete Order Status Admin
exports.deleteOrder = catchAsyncErrors( async (req, res, next) => {
    
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Orders Not Found!", 404));
    }

    await order.deleteOne()
    
    res.status(200).json({
        success: true,
        message: "Order deleted successfully!"
    })
})