import { useState } from "react";
import axios from "axios";
import { baseurl } from "../utils";
import { SignInTypes } from "../types";
import { useDispatch } from "react-redux";
import { getthetoken } from "../store/Slices/Users";

interface useSinginhooktypes {
  loading: boolean;
  usesinginuser(data: SignInTypes): Promise<boolean>;
  errormessage: string;
}

const useSinginhook = (): useSinginhooktypes => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");

  const usesinginuser = async (data: SignInTypes) => {
    console.log(data);
    setloading(true);
    try {
      let response = await axios.post(`${baseurl}/User/login`, data, {
        withCredentials: true,
      });

      dispatch(getthetoken(response?.data?.token));
      return true;
    } catch (error: any) {
      seterrormessage(error?.response?.data?.message);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, usesinginuser, errormessage };
};

export default useSinginhook;
