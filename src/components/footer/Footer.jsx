import React from "react";
import { IconCopyright } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div
      id="footer"
      style={{
        color: "white",
        padding: "1rem",
        backgroundColor: "transparent",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Copyright <IconCopyright style={{ backgroundColor: "transparent" }} />{" "}
      2023 Vu Huy Hoang - All Rights Reserved.
    </div>
  );
}
