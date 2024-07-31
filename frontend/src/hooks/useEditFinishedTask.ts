import { baseurl } from "@/utils";
import axios from "axios";
import { useState } from "react";
type data = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

interface useEditFinishedTaskreturnTypes {
  laoding: boolean;
  editthefinishedtask(data: data): Promise<boolean>;
}
const useEditFinishedTask = (): useEditFinishedTaskreturnTypes => {
  const [laoding, setloading] = useState<boolean>(false);

  const editthefinishedtask = async (data: data) => {
    setloading(true);
    try {
      await axios.put(`${baseurl}`);
      await axios.get(`${baseurl}`);

      return true;
    } catch (error) {
      return false;
    } finally {
      setloading(false);
    }
  };

  return { laoding, editthefinishedtask };
};

export default useEditFinishedTask;
