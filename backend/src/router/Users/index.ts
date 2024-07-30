import { Router } from "express";
import controllers from "../../controllers";
import middleware from "../../middleware";

const router = Router();

router.post("/create", controllers.Users.Createtheuser);
router.post("/login", controllers.Users.Logintheuser);
router.get("/GetUsers", middleware, controllers.Users.gettherusername);

export default router;
