import { Router } from "express";
import controllers from "../../controllers";
import middleware from "../../middleware";

const router = Router();
router.post("/create", middleware, controllers.Finished.Finishedcreate);
router.put("/Edit/:id", middleware, controllers.Finished.Finishededit);
router.delete("/delete/:id", middleware, controllers.Finished.Finisheddel);
router.get("/Get", middleware, controllers.Finished.FinishedGet);

export default router;
