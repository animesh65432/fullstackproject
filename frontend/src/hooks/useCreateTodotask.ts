import axios from "axios";
import { useState } from "react";
import { Tasktodotypes } from "../types";
import { baseurl } from "../utils";
import { getthealltodostask } from "../store/Slices/Tasks";
import { useDispatch } from "react-redux";

interface useCreatetodotasktypes {
  Todoloading: boolean;
  createTodotask(data: Tasktodotypes): Promise<boolean>;
}

const useCreatetodo = (): useCreatetodotasktypes => {
  const [Todoloading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const createTodotask = async (data: Tasktodotypes): Promise<boolean> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/Todo/create`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/Todo/Get`, {
        withCredentials: true,
      });
      dispacth(getthealltodostask(response?.data?.data));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { Todoloading, createTodotask };
};

export default useCreatetodo;
