import React, { ReactNode } from "react";
import Store from "@/store";
import { Provider } from "react-redux";

type props = {
  children: ReactNode;
};

const StoreProvider: React.FC<props> = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;
