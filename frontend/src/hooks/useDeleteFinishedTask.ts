import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getheallfiniehdetasks } from "../store/Slices/Tasks";

type data = {
  _id: string;
};
interface useDeleteFinishedTaskReturntypes {
  loading: boolean;
  deleteFinishtask(data: data): Promise<boolean>;
}

const useDeleteFinishedTask = (): useDeleteFinishedTaskReturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const deleteFinishtask = async (data: data) => {
    console.log(data._id);
    setloading(true);
    try {
      await axios.delete(`${baseurl}/Finsihed/delete/${data._id}`, {
        withCredentials: true,
      });
      let Response = await axios.get(`${baseurl}/Finsihed/Get`, {
        withCredentials: true,
      });
      dispacth(getheallfiniehdetasks(Response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, deleteFinishtask };
};

export default useDeleteFinishedTask;
