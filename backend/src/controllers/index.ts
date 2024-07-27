import { Createtheuser, Logintheuser } from "./Users";
import {
  senttheforgetpasswordmessage,
  updatepasswordmessage,
} from "./forgetpassword";

const controllers = {
  Users: { Createtheuser, Logintheuser },
  ForgetPassword: { senttheforgetpasswordmessage, updatepasswordmessage },
};

export default controllers;
