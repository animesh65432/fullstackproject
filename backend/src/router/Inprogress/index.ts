import { Router } from "express";
import controllers from "../../controllers";
import middleware from "../../middleware";

const router = Router();
router.post("/create", middleware, controllers.Inprogress.Inprogresscreate);
router.put("/Edit/:id", middleware, controllers.Inprogress.Inprogressedit);
router.delete("/delete/:id", middleware, controllers.Inprogress.Inprogressdel);
router.get("/Get", middleware, controllers.Inprogress.InprogressGet);

export default router;
