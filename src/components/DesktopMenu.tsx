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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ justifyContent: 'space-between', display: 'flex' }}>
        <div>
					<a href="#" className="navbar-brand">
						Logo
					</a>	
				</div>
        <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {mapTab.map((tab) => {
              return (
                <li key={tab.text} className="nav-item">
                  <a href="#" className="nav-link">
                    {tab.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
