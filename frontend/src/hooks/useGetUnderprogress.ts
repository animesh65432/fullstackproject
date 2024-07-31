import axios from "axios";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import {
  getheunderreviews,
  removetheunderreviews,
} from "../store/Slices/Tasks";

interface UseUnderProgressreturntypes {
  GetUnderProgress: () => Promise<void>;
}

const useGetUnderprogress = (): UseUnderProgressreturntypes => {
  const dispatch = useDispatch();

  const GetUnderProgress = async (): Promise<void> => {
    try {
      const response = await axios.get(`${baseurl}/underreviews/Get`, {
        withCredentials: true,
      });
      let data = response?.data?.data;
      console.log(data);
      dispatch(removetheunderreviews());
      dispatch(getheunderreviews(data));
    } catch (error) {
      dispatch(getheunderreviews([]));
    }
  };

  return { GetUnderProgress };
};

export default useGetUnderprogress;
