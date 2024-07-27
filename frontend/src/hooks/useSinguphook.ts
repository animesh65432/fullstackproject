import { useState } from "react";
import axios from "axios";
import { baseurl } from "../utils";
import { SignupTypes } from "../types";

interface useSinginuphooktypes {
  loading: boolean;
  usesingupuser(data: SignupTypes): Promise<boolean>;
  errormessage: string;
}

const useSinguphook = (): useSinginuphooktypes => {
  const [loading, setloading] = useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");

  const usesingupuser = async (data: SignupTypes) => {
    console.log(data);
    setloading(true);
    try {
      let response = await axios.post(`${baseurl}/User/create`, data);
      return true;
    } catch (error) {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, usesingupuser, errormessage };
};

export default useSinguphook;
