"use client";
import { CSSProperties } from "react";

import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",


}

export const Loader = () => {
  return <ClipLoader color="#3498db" size={50}      cssOverride={override}  />
};
