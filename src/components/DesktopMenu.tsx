import Link from "next/link";
import React from "react";

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
  {
    text: "link",
    link: "#",
    type: "link",
  },
  {
    text: "link",
    link: "#",
    type: "link",
  },
];

export function DesktopMenu() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "rgba(115, 115, 116, 0.5)" }}
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
