import { Request, Response } from "express";
import { Users, ForgetPassword } from "../../models";
import Config from "../../config";
import nodemailer from "nodemailer";
import bycrptjs from "bcryptjs";

const senttheforgetpasswordmessage = async (req: Request, res: Response) => {
  try {
    const { Email } = req.body;

    let CheckUser = await Users.findOne({ Email });

    console.log(CheckUser, Email);

    if (!CheckUser) {
      return res.status(400).json({
        message: "user is not Singed  up yet",
      });
    }

    let newforgetpassword = new ForgetPassword({
      active: true,
      user: CheckUser._id,
    });

    await newforgetpassword.save();

    console.log(Config.NODEMAILERUSER, Config.NODEMAILERPASSWORD);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: Config.NODEMAILERUSER,
        pass: Config.NODEMAILERPASSWORD,
      },
    });

    const mailOptions = {
      from: Config.NODEMAILERUSER,
      to: Email,
      subject: "Password Reset Request",
      html: `<a href='http://localhost:3000/authentication/update/${newforgetpassword._id}'>Click here to reset your password</a>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message: "sucessfully sent it",
    });
  } catch (error) {
    console.log("Getting errors from sent the forgetpassword", error);
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

const updatepasswordmessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { Password } = req.body;

    if (!Password) {
      return res.status(400).json({
        message: "invaild creadtionals",
      });
    }

    let forgetpassword = await ForgetPassword.findById(id);

    if (!forgetpassword || !forgetpassword.active || !forgetpassword._id) {
      res.status(400).json({
        message: "id is experied or id is missing",
      });
    }

    let hashpassword = await bycrptjs.hash(Password, 10);

    await ForgetPassword.findByIdAndUpdate(id, { active: false });

    await Users.findByIdAndUpdate(forgetpassword?.user, {
      Password: hashpassword,
    });

    return res.status(202).json({
      message: "sucessfully update it",
    });
  } catch (error) {
    console.log(error, "Getting errors from update password");
    return res.status(500).json({
      message: "internal server errors",
    });
  }
};

export { senttheforgetpasswordmessage, updatepasswordmessage };
