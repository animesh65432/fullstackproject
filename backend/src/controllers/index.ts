import { Createtheuser, Logintheuser, gettherusername } from "./Users";
import {
  senttheforgetpasswordmessage,
  updatepasswordmessage,
} from "./forgetpassword";

const controllers = {
  Users: { Createtheuser, Logintheuser, gettherusername },
  ForgetPassword: { senttheforgetpasswordmessage, updatepasswordmessage },
};

export default controllers;
