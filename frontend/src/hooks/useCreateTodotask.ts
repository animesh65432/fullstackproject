import axios from "axios";
import { useState } from "react";
import { Tasktodotypes } from "../types";
import { baseurl } from "../utils";
import { getthealltodostask } from "../store/Slices/Tasks";
import { useDispatch } from "react-redux";

interface useCreatetodotasktypes {
  loading: boolean;
  createInprogresstask(data: Tasktodotypes): Promise<boolean>;
}

const useCreatetodo = (): useCreatetodotasktypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const createInprogresstask = async (data: Tasktodotypes): Promise<void> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/Todo/create`, data);
      let response = await axios.get(`${baseurl}/Todo/Get`);
      dispacth(getthealltodostask(response?.data?.data));
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, createInprogresstask };
};

export default useCreatetodo;
