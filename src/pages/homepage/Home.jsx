import React from "react";
import CoverText from "../../components/cover-text/CoverText";
import GamesList from "../../modules/GamesList";

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: "transparent" }}>
      <CoverText />
      <GamesList />
    </div>
  );
}
