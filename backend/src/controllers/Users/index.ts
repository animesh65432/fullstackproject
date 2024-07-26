import { Request, Response } from "express";
import { Users } from "../../models";
import bycrptjs from "bcryptjs";

const Createtheuser = async (req: Request, res: Response) => {
  try {
    const { Name, Email, Password } = req.body;

    if (!Name || !Email || !Password) {
      return res.status(400).json({ message: "invail creadentials" });
    }

    let CheckUser = await Users.findOne({ Email });

    if (CheckUser) {
      return res.status(400).json({ message: "user alredy Singed up" });
    }

    let hashpassword = await bycrptjs.hash(Password, 10);
    let newuser = await Users.create({
      Name,
      Email,
      Password: hashpassword,
    });

    return res.status(201).json({ message: "users sucessfully created" });
  } catch (error) {
    console.log(error, "Get errors from creating users");

    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const Logintheuser = async (req: Request, res: Response) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({ message: "invail creadentials" });
    }

    let CheckUser = await Users.findOne({ Email });

    if (!CheckUser) {
      return res.status(400).json({ message: "users not singed up yet" });
    }

    let CheckPassword = await bycrptjs.compare(Password, CheckUser.Password);

    if (!CheckPassword) {
      return res.status(400).json({ message: "Password is wrong" });
    }

    return res.status(200).json({
      message: "sucessfully log in",
    });
  } catch (error) {
    console.log(error, "Getting Errors From login the users");
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

export { Createtheuser, Logintheuser };
