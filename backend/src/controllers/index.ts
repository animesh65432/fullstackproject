import { Createtheuser, Logintheuser, gettherusername } from "./Users";
import {
  senttheforgetpasswordmessage,
  updatepasswordmessage,
} from "./Forgetpassword";
import {
  Finishedcreate,
  Finisheddel,
  Finishededit,
  FinishedGet,
} from "./Finished";
import {
  Inprogresscreate,
  Inprogressdel,
  Inprogressedit,
  InprogressGet,
} from "./Inprogress";
import { Todocreate, Tododel, Todoedit, TodoGet } from "./Todo";
import {
  underReviewcreate,
  underReviewdel,
  underReviewedit,
  underreviewget,
} from "./Underreview";

const controllers = {
  Users: { Createtheuser, Logintheuser, gettherusername },
  ForgetPassword: { senttheforgetpasswordmessage, updatepasswordmessage },
  Finished: { Finishedcreate, Finisheddel, Finishededit, FinishedGet },
  Inprogress: {
    Inprogresscreate,
    Inprogressdel,
    Inprogressedit,
    InprogressGet,
  },
  Todo: { Todocreate, Tododel, Todoedit, TodoGet },
  UnderReviews: {
    underReviewcreate,
    underReviewdel,
    underReviewedit,
    underreviewget,
  },
};

export default controllers;
