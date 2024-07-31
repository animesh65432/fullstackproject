import axios from "axios";
import { baseurl } from "../utils";
import { useDispatch } from "react-redux";
import { gettheinprogress } from "../store/Slices/Tasks";

interface UseGetinprocessReturnTypes {
  Getintherprocess: () => Promise<void>;
}

const useGetinprogess = (): UseGetinprocessReturnTypes => {
  const dispatch = useDispatch();

  const Getintherprocess = async (): Promise<void> => {
    try {
      const response = await axios.get(`${baseurl}/inprogress/Get`, {
        withCredentials: true,
      });
      console.log(response);

      dispatch(gettheinprogress(response?.data?.data));
    } catch (error) {
      dispatch(gettheinprogress([]));
    }
  };

  return { Getintherprocess };
};

export default useGetinprogess;
