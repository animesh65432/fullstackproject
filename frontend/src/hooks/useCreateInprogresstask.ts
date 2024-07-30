import axios from "axios";
import { useState } from "react";
import { Tasktodotypes } from "../types";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { gettheinprogress } from "../store/Slices/Tasks";

interface useCreateInprogresstasktypes {
  loading: boolean;
  createInprogresstask(data: Tasktodotypes): Promise<boolean>;
}

const useCreateInprogresstask = (): useCreateInprogresstasktypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const createInprogresstask = async (
    data: Tasktodotypes
  ): Promise<boolean> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/Inprogress/create`, data);
      let response = await axios.get(`${baseurl}/Inprogress/Get`);
      dispacth(gettheinprogress(response?.data?.data));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, createInprogresstask };
};

export default useCreateInprogresstask;
