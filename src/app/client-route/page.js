"use client";

import { useTheme } from "@/components/theme-provider";

import { clientSideFunction } from "@/utils/client-utils";
// import { serverSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
  console.log("Client Route Rendered");
  //   const result = serverSideFunction();

  const result = clientSideFunction();

  const theme = useTheme();

  return (
    <div>
      <h1>Client Route Page</h1>
      <p>Client route: {result}</p>
    </div>
  );
};

export default ClientRoutePage;
