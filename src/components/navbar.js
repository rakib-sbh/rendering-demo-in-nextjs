"use client";

import { useState } from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

const Navbar = () => {
  console.log("Navbar Rendered");

  const [search, setSearch] = useState("");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
