/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BlockContent } from "./BlockContent";

function AvatarUser() {
  return (
    <div style={{ margin: "1rem", width: 250 }}>
      <div style={{ position: "relative", height: 280 }}>
        <div className="team">
          <div className="content">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 6,
              }}
              className="front"
            />
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 6,
              }}
              className="back"
            />
          </div>
        </div>
        <a
          href="#"
          style={{
            borderRadius: 4,
            backgroundColor: "#37404c",
            padding: "0.6rem 1.5rem",
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            left: -15,
          }}
        >
          Link
        </a>
      </div>
      <div style={{ textAlign: "left" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur
      </div>
    </div>
  );
}

export default function TeamComponent() {
  return (
    <BlockContent title="Team">
      <div
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          alignItems: "center",
          marginInline: "auto",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[...new Array(7)].map((x, i) => {
            return <AvatarUser key={i} />;
          })}
        </div>
      </div>
    </BlockContent>
  );
}
