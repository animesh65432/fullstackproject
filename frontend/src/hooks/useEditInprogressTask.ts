import { baseurl } from "@/utils";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { gettheinprogress } from "../store/Slices/Tasks";
type data = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

interface useEditinprogressreturnTypes {
  laoding: boolean;
  editinprogress(data: data): Promise<boolean>;
}
const useEditInprogressTask = (): useEditinprogressreturnTypes => {
  const [laoding, setloading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const editinprogress = async (data: data) => {
    console.log("clicked");
    setloading(true);
    try {
      let result = await axios.put(
        `${baseurl}/inprogress/Edit/${data._id}`,
        data,
        {
          withCredentials: true,
        }
      );

      let response = await axios.get(`${baseurl}/inprogress/Get`, {
        withCredentials: true,
      });
      dispatch(gettheinprogress(response?.data?.data));
      return true;
    } catch (error) {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { laoding, editinprogress };
};

export default useEditInprogressTask;
