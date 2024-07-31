export type SignupTypes = {
  Name: string;
  Email: string;
  Password: string;
};

export type SignInTypes = {
  Email: string;
  Password: string;
};

export type UpdatePasswordtypes = {
  Password: string;
};

export type ResetPasswordtypes = {
  Email: string;
};

export type Tasktodotypes = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};
