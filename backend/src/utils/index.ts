import jsonwebtoken from "jsonwebtoken";
import Config from "../config";
type JSONWEBTOKENPAYLAOD = {
  Email: string;
};

const createjsonwebtoken = (data: JSONWEBTOKENPAYLAOD) => {
  let token = jsonwebtoken.sign(data, Config.jsonwebsecrect as string);
  return token;
};

export { createjsonwebtoken };
