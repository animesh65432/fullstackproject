import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { Tasktodotypes } from "../types";
import { useDispatch } from "react-redux";
import { getheallfiniehdetasks } from "../store/Slices/Tasks";

interface useCreateFinishedTasktypes {
  finishloading: boolean;
  createfinishedtask(data: Tasktodotypes): Promise<boolean>;
}

const useCreateFinishedTask = (): useCreateFinishedTasktypes => {
  const dispacth = useDispatch();
  const [finishloading, setloading] = useState<boolean>(false);

  const createfinishedtask = async (data: Tasktodotypes): Promise<any> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/Finsihed/create`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/Finsihed/Get`, {
        withCredentials: true,
      });
      dispacth(getheallfiniehdetasks(response?.data?.data));
      return true;
    } catch {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { finishloading, createfinishedtask };
};

export default useCreateFinishedTask;
