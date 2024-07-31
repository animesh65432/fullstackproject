import axios from "axios";
import { useState } from "react";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getheunderreviews } from "../store/Slices/Tasks";

type data = {
  _id: string;
};
interface useDeleteUnderReviewtaskreturntypes {
  loading: boolean;
  deleteunderreviewtask(data: data): Promise<boolean>;
}

const useDeleteUnderReviewtask = (): useDeleteUnderReviewtaskreturntypes => {
  const [loading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const deleteunderreviewtask = async (data: data) => {
    setloading(true);
    try {
      await axios.delete(`${baseurl}/underreviews/delete/${data._id}`, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/underreviews/Get`, {
        withCredentials: true,
      });
      dispacth(getheunderreviews(response?.data?.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { loading, deleteunderreviewtask };
};

export default useDeleteUnderReviewtask;
