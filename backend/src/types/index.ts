import { RefType } from "mongoose";

export type UsersSchemaTypes = {
  _id?: string;
  Name: string;
  Email: string;
  Password: string;
};

export type ForGetPasswordTypes = {
  _id?: string;
  active: boolean;
  user: RefType;
};
