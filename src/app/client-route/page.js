"use client";

import { useTheme } from "@/components/theme-provider";

// import { serverSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
  console.log("Client Route Rendered");
  //   const result = serverSideFunction();

  const theme = useTheme();

  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Route Page</h1>
      {/* <p>{result}</p> */}
    </div>
  );
};

export default ClientRoutePage;
