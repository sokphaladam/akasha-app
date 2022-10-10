import Link from "next/link";
import React from "react";
import { Button } from "primereact/button";

const mapTab = [
  {
    text: "Charater",
    link: "#",
    type: "tab",
  },
  {
    text: "Roadmap",
    link: "#",
    type: "tab",
  },
  {
    text: "Team",
    link: "#",
    type: "tab",
  },
  {
    text: "FAQ",
    link: "#",
    type: "tab",
  },
  {
    text: "Enter",
    link: "#",
    type: "tab",
  },
];

export default function DesktopMenu() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "rgba(115, 115, 116, 0.5)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="container-fluid">
        <Link href="#">
          <a className="navbar-brand">Logo</a>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {mapTab.map((tab, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link href={"#"}>
                    <a className="nav-link">{tab.text}</a>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link href={"#"}>
                <a className="nav-link">
                  <i className="pi pi-facebook"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
