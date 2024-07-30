import { Router } from "express";
import controllers from "../../controllers";
import middleware from "../../middleware";

const router = Router();
router.post("/create", middleware, controllers.UnderReviews.underReviewcreate);
router.put("/Edit/:id", middleware, controllers.UnderReviews.underReviewedit);
router.delete(
  "/delete/:id",
  middleware,
  controllers.UnderReviews.underReviewdel
);
router.get("/Get", middleware, controllers.UnderReviews.underreviewget);

export default router;
