"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Hoc from "../components/Hoc";

const Home: React.FC = () => {
  const idtoken = useSelector((state: RootState) => state.Users.token);
  console.log(idtoken);

  return (
    <div>
      <p>just up set up frontend</p>
    </div>
  );
};

export default () => (
  <Hoc>
    <Home />
  </Hoc>
);
