import axios from "axios";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import {
  getheallfiniehdetasks,
  removethefinishedtask,
} from "../store/Slices/Tasks";

interface UseGetFinishedTaskReturnTypes {
  GetTheFinishedTask: () => Promise<void>;
}

const useGetFinishedTask = (): UseGetFinishedTaskReturnTypes => {
  const dispatch = useDispatch();

  const GetTheFinishedTask = async (): Promise<void> => {
    try {
      const response = await axios.get(`${baseurl}/Finsihed/Get`, {
        withCredentials: true,
      });
      console.log(response);
      dispatch(removethefinishedtask());
      dispatch(getheallfiniehdetasks(response?.data?.data));
    } catch (error) {
      dispatch(getheallfiniehdetasks([]));
    }
  };

  return { GetTheFinishedTask };
};

export default useGetFinishedTask;
