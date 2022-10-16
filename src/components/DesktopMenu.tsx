import Link from "next/link";
import React from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

const mapTab = [
  {
    text: "Story",
    link: "#",
    type: "tab",
  },
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
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <TiSocialTwitter />
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginInline: 7 }}>
              <Link href={"#"}>
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <FaDiscord />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"#"}>
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {/* <img 
                    src="https://ucarecdn.com/1958a2aa-cf35-4aa3-a4b6-ed34b726c3de/-/format/webp/-/resize/1000/" 
                  /> */}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export const DesktopMenuComponent = DesktopMenu;
