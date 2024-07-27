import { baseurl } from "@/utils";
import axios from "axios";
import { useState } from "react";

type updatepasswordpayloadtypes = {
  id: string;
  Password: string;
};

interface useUpdatePasswordreturntypes {
  loading: boolean;
  updatepassword(data: updatepasswordpayloadtypes): Promise<boolean>;
  errormessages: string;
}

const useUpdatePassword = (): useUpdatePasswordreturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const [errormessages, seterrormessages] = useState<string>("");

  const updatepassword = async (data: updatepasswordpayloadtypes) => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/ForgetPassword/update/${data.id}`, data);
      return true;
    } catch (error: any) {
      seterrormessages(error?.response?.data?.message);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, updatepassword, errormessages };
};

export default useUpdatePassword;
