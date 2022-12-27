import React from "react";
import { Paper, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { ButtomFile } from "./ButtomFile";
export const HomePage = () => {
  return (
    <div>
    <div>
      <img
        style={{ width: "100%", zIndex: "-1", position: "absolute" }}
        src={"RBX_30.jpg"}
      />
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 400,
              height: 300,
            },
          }}
        >
          <Paper elevation={3} style={{ margin: "150px auto auto 150px" }} />
        </Box>
      </div>
      </div>
      <ButtomFile/>
    </div>
  );
};
