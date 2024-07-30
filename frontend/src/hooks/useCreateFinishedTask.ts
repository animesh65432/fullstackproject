import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { Tasktodotypes } from "../types";
import { useDispatch } from "react-redux";
import { getheallfiniehdetasks } from "../store/Slices/Tasks";

interface useCreateFinishedTasktypes {
  loading: boolean;
  createfinishedtask(data: Tasktodotypes): Promise<boolean>;
}

const useCreateFinishedTask = (): useCreateFinishedTasktypes => {
  const dispacth = useDispatch();
  const [loading, setloading] = useState<boolean>(false);

  const createfinishedtask = async (data: Tasktodotypes): Promise<any> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/Finished/create`, data);
      let response = await axios.get(`${baseurl}/Finished/Get`);
      dispacth(getheallfiniehdetasks(response?.data?.data));
      return true;
    } finally {
      setloading(false);
      return false;
    }
  };

  return { loading, createfinishedtask };
};

export default useCreateFinishedTask;
