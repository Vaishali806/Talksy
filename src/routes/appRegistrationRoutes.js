// // const express = require("express");
// // const router = express.Router();
// // const appRegistrationController = require("../controllers/appRegistrationController");
// // // // const verifyToken = require("../middleware/authMiddleware");


// // router.post(
// //     "/registerApp",
// //     ("registerApp"),
// //     appRegistrationController.registerApp
// // );



// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const appRegistrationController = require("../controllers/appRegistrationController");

// router.post(
//     "/registerApp",
//     appRegistrationController.registerApp
// );

// module.exports = router;

const express = require("express");
const router = express.Router();
const appRegistrationController = require("../controllers/appRegistrationController");
const verifyToken = require("../middleware/authMiddleware"); // ✅ Add this

router.post(
    "/registerApp",
    verifyToken, // ✅ Protect this route with JWT verification
    appRegistrationController.registerApp
);

module.exports = router;
