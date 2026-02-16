const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const validator = require("../validation");
const { validationResult } = require("express-validator");
const verifyToken = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multerConfig");

// Register Route
router.post(
  "/registerUser",
  validator.validator("registerUser"),
  upload.single("userProfilePhoto"),
  authController.registerUser
);
router.get("/getAllRegisterUsers", authController.getAllRegisterUsers);
router.get(
  "/getRegisterUserById/:id",
  verifyToken,
  authController.getRegisterUserById
);
router.put(
  "/updateRegisterUser/:id",
  verifyToken,
  validator.validator("registerUser"),
  upload.single("userProfilePhoto"),
  authController.updateRegisterUser
);
router.delete(
  "/deleteRegisterUser/:id",
  verifyToken,
  authController.deleteRegisterUser
);

// Login Route
router.post(
  "/loginUser",
  validator.validator("loginUser"),
  authController.loginUser
);

// router.post("/authorize", authController.authorizeApp);


//oauth 2.0 routes
// const appRegistrationController = require("../controllers/appRegistrationController");
// router.post(
//   "/registerApp",
//   verifyToken,
//   validator.validator("registerApp"),
//   appRegistrationController.registerApp
// );
// const authMiddleware = require("../middleware/auth");

// const authController = require("../controllers/authController");

// router.post("/authorize", authController.authorizeApp);




module.exports = router;
