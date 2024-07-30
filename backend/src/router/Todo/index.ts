import { Router } from "express";
import controllers from "../../controllers";
import middleware from "../../middleware";

const router = Router();
router.post("/create", middleware, controllers.Todo.Todocreate);
router.put("/Edit/:id", middleware, controllers.Todo.Todoedit);
router.delete("/delete/:id", middleware, controllers.Todo.Tododel);
router.get("/Get", middleware, controllers.Todo.TodoGet);

export default router;
