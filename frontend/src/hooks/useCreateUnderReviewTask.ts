import axios from "axios";
import { useState } from "react";
import { Tasktodotypes } from "../types";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getheunderreviews } from "../store/Slices/Tasks";

interface useCreateunderReviewtypes {
  underreveiewloading: boolean;
  CreateUnderReviews(data: Tasktodotypes): Promise<boolean>;
}

const useCreateunderReviewtask = (): useCreateunderReviewtypes => {
  const [underreveiewloading, setloading] = useState<boolean>(false);
  const dispacth = useDispatch();

  const CreateUnderReviews = async (data: Tasktodotypes): Promise<boolean> => {
    setloading(true);
    try {
      await axios.post(`${baseurl}/underreviews/create`, data, {
        withCredentials: true,
      });
      let response = await axios.get(`${baseurl}/underreviews/Get`, {
        withCredentials: true,
      });
      dispacth(getheunderreviews(response?.data?.data));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setloading(false);
    }
  };

  return { underreveiewloading, CreateUnderReviews };
};

export default useCreateunderReviewtask;
