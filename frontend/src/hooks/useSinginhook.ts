import { useState } from "react";
import axios from "axios";
import { baseurl } from "../utils";
import { SignInTypes } from "../types";

interface useSinginhooktypes {
  loading: boolean;
  usesinginuser(data: SignInTypes): Promise<boolean>;
  errormessage: string;
}

const useSinginhook = (): useSinginhooktypes => {
  const [loading, setloading] = useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");

  const usesinginuser = async (data: SignInTypes) => {
    setloading(true);
    try {
      let response = await axios.post(`${baseurl}/User/login`, data);
      return true;
    } catch (error) {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, usesinginuser, errormessage };
};

export default useSinginhook;
