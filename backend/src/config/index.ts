import "dotenv/config";

const Config = {
  Port: process.env.PORT,
  databaseurl: process.env.databaseurl,
  jsonwebsecrect: process.env.jsonwebsecrect,
  NODEMAILERUSER: process.env.NODEMAILERUSER,
  NODEMAILERPASSWORD: process.env.NODEMAILERPASSWORD,
};

export default Config;
