import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { HomePage } from "./HomePage";
import { ButtomFile } from "./ButtomFile";

const TopTypo = styled(Typography)`
  background-color: #fed250;
  position: static;
  padding: 3px;
  text-align: center;
`;
const HedBar = styled(AppBar)`
  background-color: white;
  position: static;
`;

const ToolB = styled(Toolbar)`
  margin: 10px;
`;
const TritBar = styled(Typography)`
  color: #303030;
  margin-left: 40px;
`;
const SelectIOption = styled(Select)`
  width: 150px;
  height: 35px;
  margin-left: 25px;
`;

const Btn = styled(Button)`
  background-color: #fed250;
  color: black;
`;

export const Navbar = () => {
  return (
    <div>
      <TopTypo>
        Our delay policy has been changed
        <span style={{ color: "blue", marginLeft: "5px" }}>Know more</span>
      </TopTypo>
      <HedBar>
        <ToolB>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src={"logo1.png"} style={{ width: "150px", height: "50px" }} />
          <img
            src={"logo2.png"}
            style={{ width: "70px", height: "40px", marginLeft: "60px" }}
          />
          <TritBar>Tariff</TritBar>
          <SelectIOption
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem>
              <em>What's new?</em>
            </MenuItem>
            <MenuItem>store</MenuItem>
            <MenuItem>Inter-city travels</MenuItem>
          </SelectIOption>
          <TritBar>Offer</TritBar>
          <SelectIOption displayEmpty>
            <MenuItem>
              <em>Partner with us</em>
            </MenuItem>
            <MenuItem>Earn with us</MenuItem>
            <MenuItem>Own a franchise</MenuItem>
          </SelectIOption>
          <SelectIOption
            displayEmpty
            style={{
              marginLeft: "80px",
              height: "35px",
              border: "1px solid  #fed250",
            }}
          >
            <MenuItem>
              <LocationOnOutlinedIcon
                style={{ paddingTop: "3px auto auto auto" }}
              />
              Banglore
            </MenuItem>
          </SelectIOption>
          <Button style={{ color: "black", marginLeft: "50px" }}>Login</Button>
          <Btn style={{ marginLeft: "50px" }}>Signup</Btn>
        </ToolB>
      </HedBar>
      <HomePage />
    </div>
  );
};
