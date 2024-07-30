import { useState } from "react";
import axios from "axios";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getthealltodostask } from "../store/Slices/Tasks";

type data = {
  _id: string;
};

interface useDeleteTodoTskReturnTypes {
  loading: boolean;
  deletetodotask(data: data): Promise<boolean>;
}

const useDeleteTodoTask = (): useDeleteTodoTskReturnTypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const deletetodotask = async (data: data) => {
    setloading(true);
    try {
      await axios.delete(`${baseurl}`);
      let response = await axios.get(`${baseurl}`);
      dispacth(getthealltodostask(response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, deletetodotask };
};

export default useDeleteTodoTask;
