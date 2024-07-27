"use client";

import React, { useEffect } from "react";
import UpdatePassword from "@/components/UpdatePassword";
import { useRouter } from "next/navigation";

type props = {
  params: {
    id: string;
  };
};
const page: React.FC<props> = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    if (params.id.length === 0) {
      router.push("/authentication/Reset");
    }
  }, [params]);

  return (
    <div>
      <UpdatePassword id={params.id} />
    </div>
  );
};

export default page;
