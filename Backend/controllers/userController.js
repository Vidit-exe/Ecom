const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.registerUser = catchAsyncErrors ( async (req, res, next) => {

    const { name, email, password }= req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "This is a sample id",
            url: "profilepictureUrl"
        }
    })

    sendToken(user, 200, res)
})

exports.loginUser = catchAsyncErrors( async (req, res, next) => {

    const { email, password } = req.body || {};

    //Checking if user has given email and password

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendToken(user, 200, res)
})

exports.logoutUser = catchAsyncErrors( async (req, res, next) => {

    res.cookie("token", null, {
        expire: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged Out Successfully!"
    })
})

exports.forgotPassword = catchAsyncErrors( async (req, res, next) => {

    if (!req.body || !req.body.email) {
    return next(new ErrorHandler("Please provide your email", 400));
}

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandler("User Not Found!", 404))
    }

    // Get reset password token
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n \n ${resetPasswordUrl} \n \nIf you have not requested this email then please ignore it.`

    try {
        await sendEmail({
            email: user.email,
            subject: `E-commerce Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully.`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500))
    }

})

exports.resetPassword = catchAsyncErrors( async (req, res, next) => {

    //Creating Token Hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()},
    })
    
    if (!user) {
        return next(new ErrorHandler("Reset password token is invalid or has been expired.", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Passwords doesn't match.", 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
})

exports.getUserDetails = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        succes: true,
        user,
    })

})

exports.updatePassword = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password doesn't match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);

})

exports.updateProfile = catchAsyncErrors( async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }

    //We will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })

})

// Get All User Details (admin)
exports.getAllUsers = catchAsyncErrors( async (req, res, next) => {
    const users = await User.find()

    res.status(200).json({
        success: true,
        users,
    })
})

// Get single user details (admin)
exports.getSingleUser = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHandler(`User doesn't exist with ID: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user,
    })
})

// Update User Role (admin)
exports.updateRole = catchAsyncErrors( async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })

})

//Delete A User (admin)
exports.deleteUser = catchAsyncErrors( async (req, res, next) => {

    //We will remove cloudinary later
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User doesn't exist with ID: ${req.params.id}`))
    }

    await user.deleteOne()

    res.status(200).json({
        success: true,
        message: "User Deleted Successfully!"
    })
})