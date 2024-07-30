import { Request, Response } from "express";
import { Inprogress } from "../../models";

const Inprogresscreate = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;

    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    let newinprogress = new Inprogress({
      title,
      Status,
      Priority,
      Description,
      Deadline,
    });

    await newinprogress.save();

    return res.status(201).json({
      message: "sucessfully create the user",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

let Inprogressdel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Inprogress.findByIdAndDelete(id);

    return res.status(200).json({
      message: "sucessfully delete it",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const Inprogressedit = (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;
    const { id } = req.params;
    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    Inprogress.findByIdAndUpdate(id, {
      title,
      Status,
      Priority,
      Description,
      Deadline,
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

const InprogressGet = async (req: Request, res: Response) => {
  try {
    let data = await Inprogress.find({
      user: req.user._id,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

export { Inprogresscreate, Inprogressedit, Inprogressdel, InprogressGet };
