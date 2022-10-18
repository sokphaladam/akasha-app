/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { GiCartwheel } from "react-icons/gi";
import { BlockContent } from "../BlockContent";

const events1 = [
  {
    status: "Ordered",
    date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Processing",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Shipped",
    date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Delivered",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
  },
];

const customizedMarker = (item: any) => {
  return (
    <span
      className="custom-marker shadow-1"
      style={{
        backgroundColor: item.color,
        padding: ".3rem",
        borderRadius: "50%",
        width: 35,
        height: 35,
      }}
    >
      <GiCartwheel />
    </span>
  );
};

const customizedContent: any = (item: any) => {
  return (
    <Card
      title={item.status}
      style={{
        backgroundColor: "rgba(115, 115, 116, 0.5)",
        color: "#f3f3f3",
      }}
      header={
        <img
          alt="Card"
          src="https://act.hoyoverse.com/puzzle/upload/puzzle/2022/09/23/04192a8817bf9a79b36c9c2b3c4fc6f8_2369084583310338932.png?x-oss-process=image/format,webp/quality,Q_90"
          onError={(e: any) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          style={{
            width: "100%",
            height: 150,
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      }
    >
      <small style={{ fontSize: 10 }}>{item.date}</small>
      <p style={{ fontSize: 11 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
      <a
        href="#"
        className="p-button-text p-button-sm text-primary"
        style={{ fontSize: 11 }}
      >
        Read more
      </a>
    </Card>
  );
};

export default function Roadmap() {
  return (
    <BlockContent title="Roadmap" id="roadmap">
      <div style={{ marginTop: "5%" }}>
        <Timeline
          value={[...events1, ...events1]}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </BlockContent>
  );
}
