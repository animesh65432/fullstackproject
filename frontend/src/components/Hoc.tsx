import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";

type props = {
  children: ReactNode;
};

const Hoc: React.FC<props> = ({ children }) => {
  const idtoken = useSelector((state: RootState) => state.Users.token);
  const router = useRouter();

  useEffect(() => {
    if (idtoken.length == 0) {
      router.push("/authentication/Singin");
    }
  }, [router, idtoken]);

  return <>{children}</>;
};

export default Hoc;
