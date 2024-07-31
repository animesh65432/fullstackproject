import { baseurl } from "@/utils";
import axios from "axios";
import { useState } from "react";
import { getheallfiniehdetasks } from "../store/Slices/Tasks";
import { useDispatch } from "react-redux";

type data = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

interface useEditFinishedTaskreturnTypes {
  laoding: boolean;
  editthefinishedtask(data: data): Promise<boolean>;
}
const useEditFinishedTask = (): useEditFinishedTaskreturnTypes => {
  const [laoding, setloading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const editthefinishedtask = async (data: data) => {
    setloading(true);
    try {
      await axios.put(`${baseurl}/Finsihed/Edit/${data._id}`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/Finsihed/Get`, {
        withCredentials: true,
      });
      console.log(response);
      dispatch(getheallfiniehdetasks(response?.data?.data));
      return true;
    } catch (error) {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { laoding, editthefinishedtask };
};

export default useEditFinishedTask;
