import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email Format is Invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is Required")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({ min: 3 })
            .withMessage("Username must be at least 3 characters long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        body("fullName")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Full Name must not be empty")
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .optional()
            .trim()
            .isEmail()
            .withMessage("Email is Invalid"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is Required")
            .isLength({ min: 3 })
            .withMessage("Username must be at least 3 characters long"),
    ]
}

const userChangeCurrentPasswordValidator = () => {
    return [
        body("oldPassword")
            .notEmpty()
            .withMessage("Old Password Is required"),
        body("newPassword")
            .notEmpty()
            .withMessage("NewPassword Is required"),
    ]
}

const userForgotPasswordValidator = () => {
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email is Invalid")
    ]
}

const userResetForgotPasswordValidator = () => {
    return [
        body("newPassword")
            .notEmpty()
            .withMessage("New Password is required")
    ]
}

export {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userResetForgotPasswordValidator
}