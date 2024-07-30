import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import {
  getheunderreviews,
  removetheunderreviews,
} from "../store/Slices/Tasks";

type data = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

interface useEditunderprogresstaskreturntypes {
  loading: boolean;
  editunderprogresstask(data: data): Promise<boolean>;
}

const useEditunderprogresstask = (): useEditunderprogresstaskreturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();
  const editunderprogresstask = async (data: data) => {
    setloading(true);
    try {
      await axios.put(`${baseurl}`);
      let response = await axios.get(`${baseurl}`);
      dispacth(removetheunderreviews());
      dispacth(getheunderreviews(response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, editunderprogresstask };
};

export default useEditunderprogresstask;
