import { Router } from "express";
import controllers from "../../controllers";

const router = Router();
router.post("/sent", controllers.ForgetPassword.senttheforgetpasswordmessage);
router.post("/update/:id", controllers.ForgetPassword.updatepasswordmessage);

export default router;
