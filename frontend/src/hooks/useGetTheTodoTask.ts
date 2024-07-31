import axios from "axios";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { getthealltodostask, reomvethetodotask } from "../store/Slices/Tasks";

interface UseGettodoreturntypes {
  GetTheTodos: () => Promise<void>;
}

const useGettodo = (): UseGettodoreturntypes => {
  const dispatch = useDispatch();

  const GetTheTodos = async (): Promise<void> => {
    try {
      const response = await axios.get(`${baseurl}/Todo/Get`, {
        withCredentials: true,
      });
      console.log(response);
      dispatch(getthealltodostask(response?.data?.data));
    } catch (error) {
      dispatch(getthealltodostask([]));
    }
  };

  return { GetTheTodos };
};

export default useGettodo;
