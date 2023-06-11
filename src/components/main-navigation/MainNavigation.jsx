import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./MainNavigation.scss";

export default function MainNavigation() {
  const [active, setActive] = useState(null);

  const navItemArr = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Library", path: "/library" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const renderNavItem = navItemArr.map((e) => {
    return (
      <div
        key={e.id}
        style={{
          width: `${100 / navItemArr.length}%`,
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          textAlign: "center",
          backgroundColor: "transparent",
        }}
        className={`header-item`}
        onClick={() => {
          handleNavigate(e.path);
          setActive(e.id);
        }}
      >
        <h3 className={`header-item-text ${active == e.id && "active"}`}>
          {e.name}
        </h3>
      </div>
    );
  });

  return (
    <header id="header" style={{ backgroundColor: "transparent" }}>
      {renderNavItem}
    </header>
  );
}
