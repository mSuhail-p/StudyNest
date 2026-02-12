import { Router } from "express";
import { userController } from "./user.controller";

let usercontroller = new userController();
const router = Router();

router.get("/areaOfStudies", usercontroller.areaOfstudies);

export default router;
