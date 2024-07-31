import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getthealltodostask } from "../store/Slices/Tasks";

type data = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

interface useEditTodotypes {
  loading: boolean;
  edittask(data: data): Promise<boolean>;
}

const useEditTodotask = (): useEditTodotypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();
  const edittask = async (data: data) => {
    setloading(true);
    try {
      await axios.put(`${baseurl}/Todo/Edit/${data._id}`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/Todo/Get`, {
        withCredentials: true,
      });
      dispacth(getthealltodostask(response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, edittask };
};

export default useEditTodotask;
