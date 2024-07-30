import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { gettheinprogress } from "../store/Slices/Tasks";

type data = {
  _id: string;
};

interface useDeleteInprogressTaskreturntypes {
  loading: boolean;
  deleteinprogresstak(data: data): Promise<boolean>;
}

const useDeleteInprogressTask = (): useDeleteInprogressTaskreturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const deleteinprogresstak = async (data: data) => {
    setloading(true);
    try {
      await axios.delete(`${baseurl}`);
      let Response = await axios.get(`${baseurl}`);
      dispacth(gettheinprogress(Response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, deleteinprogresstak };
};

export default useDeleteInprogressTask;
