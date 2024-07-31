import { Request, Response } from "express";
import { Finished } from "../../models";

const Finishedcreate = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;

    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    let newfinish = new Finished({
      title,
      Status,
      Priority,
      Description,
      Deadline,
      user: req.user._id,
    });

    await newfinish.save();

    return res.status(201).json({
      message: "sucessfully create the user",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

let Finisheddel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Finished.findByIdAndDelete(id);

    return res.status(200).json({
      message: "sucessfully delete it",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const Finishededit = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;
    console.log(title, Status, Priority, Description, Deadline);
    const { id } = req.params;
    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    let finished = await Finished.findByIdAndUpdate(id, {
      title,
      Status,
      Priority,
      Deadline,
      Description,
    });
    console.log(finished);
    res.status(200).json({
      message: "sucessfully update it",
    });
  } catch (error) {
    res.status(500).json({
      message: "interal server errors",
    });
  }
};

const FinishedGet = async (req: Request, res: Response) => {
  try {
    let data = await Finished.find({ user: req.user._id });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

export { Finishedcreate, Finisheddel, Finishededit, FinishedGet };
