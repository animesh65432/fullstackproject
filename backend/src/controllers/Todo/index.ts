import { Request, Response } from "express";
import { Todo } from "../../models";

const Todocreate = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;

    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    let todo = new Todo({
      title,
      Status,
      Priority,
      Description,
      Deadline,
      user: req.user._id,
    });

    await todo.save();

    return res.status(201).json({
      message: "sucessfully created",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

let Tododel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    return res.status(200).json({
      message: "sucessfully delete it",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const Todoedit = async (req: Request, res: Response) => {
  try {
    const { title, Status, Priority, Description, Deadline } = req.body;
    const { id } = req.params;
    console.log(id);
    if (!title || !Status || !Priority) {
      return res.status(400).json({
        message: "inavild credationals",
      });
    }

    await Todo.findByIdAndUpdate(id, {
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

const TodoGet = async (req: Request, res: Response) => {
  try {
    const data = await Todo.find({
      user: req.user._id,
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "internal server errors",
    });
  }
};

export { Todocreate, Tododel, Todoedit, TodoGet };
