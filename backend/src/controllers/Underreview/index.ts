import { Request, Response } from "express";
import { UnderReview } from "../../models";

const underReviewcreate = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;

    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    let newunderreview = new UnderReview({
      title,
      Status,
      Priority,
      Description,
      Deadline,
      user: req.user._id,
    });

    await newunderreview.save();

    return res.status(201).json({
      message: "sucessfully create the user",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

let underReviewdel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await UnderReview.findByIdAndDelete(id);

    return res.status(200).json({
      message: "sucessfully delete it",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const underReviewedit = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;
    const { id } = req.params;

    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    await UnderReview.findByIdAndUpdate(id, {
      title,
      Status,
      Priority,
      Deadline,
      Description,
    });

    res.status(200).json({
      message: "sucessfully update it",
    });
  } catch (error) {
    res.status(500).json({
      message: "interal server errors",
    });
  }
};

const underreviewget = async (req: Request, res: Response) => {
  try {
    let data = await UnderReview.find({
      user: req.user._id,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};
export { underReviewcreate, underReviewedit, underReviewdel, underreviewget };
