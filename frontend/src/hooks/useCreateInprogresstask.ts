import axios from "axios";
import { useState } from "react";
import { Tasktodotypes } from "../types";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { gettheinprogress } from "../store/Slices/Tasks";

interface useCreateInprogresstasktypes {
  InProgressloading: boolean;
  createInprogresstask(data: Tasktodotypes): Promise<boolean>;
}

const useCreateInprogresstask = (): useCreateInprogresstasktypes => {
  const [InProgressloading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const createInprogresstask = async (
    data: Tasktodotypes
  ): Promise<boolean> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/inprogress/create`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/inprogress/Get`, {
        withCredentials: true,
      });
      dispacth(gettheinprogress(response?.data?.data));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { InProgressloading, createInprogresstask };
};

export default useCreateInprogresstask;
