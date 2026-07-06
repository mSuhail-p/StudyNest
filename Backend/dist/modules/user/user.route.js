"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
let usercontroller = new user_controller_1.userController();
const router = (0, express_1.Router)();
router.get("/areaOfStudies", usercontroller.areaOfstudies);
exports.default = router;
