"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Hoc, Main } from "../components";

const Home: React.FC = () => {
  const idtoken = useSelector((state: RootState) => state.Users.token);

  return (
    <div className="flex">
      <Main />
    </div>
  );
};

export default () => (
  <Hoc>
    <Home />
  </Hoc>
);
