import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";

type sentthemessagepaylad = {
  Email: string;
};
interface useSentThemessagereturntypes {
  loading: boolean;
  sentthemessage(data: sentthemessagepaylad): Promise<boolean>;
  errormessage: string;
}
const useSentThemessage = (): useSentThemessagereturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");

  const sentthemessage = async (data: sentthemessagepaylad) => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/ForgetPassword/sent`, data);
      return true;
    } catch (error: any) {
      seterrormessage(error?.response?.data?.message);
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, sentthemessage, errormessage };
};

export default useSentThemessage;
