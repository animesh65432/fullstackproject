import { Router } from "express";
import controllers from "../../controllers";

const router = Router();

router.post("/create", controllers.Users.Createtheuser);
router.post("/login", controllers.Users.Logintheuser);

export default router;
