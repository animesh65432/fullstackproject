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

export type Taskwordtypes = {
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
  user: RefType;
};
