import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

export const ButtomFile = () => {
  const images = [
    <img src={"slide1.jpg"} />,
    <img src={"slid22.jpg"} />,
    <img src={"slide3.jpg"} />,
  ];

  return (
    <div>
      <Carousel style={{ position: "static" }}>
        <Paper>
          {images.map((el) => {
            <img src={el.img} />;
          })}
        </Paper>
      </Carousel>
    </div>
  );
};
