import React from "react";
import { AppBar, Toolbar, Typography, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import { Image } from "@mui/icons-material";

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

const TritBar = styled(Typography)`
 color: #303030;
`

export const Navbar = () => {
  return (
    <div>
      <TopTypo>
        Our delay policy has been changed
        <span style={{ color: "blue", marginLeft: "5px" }}>Know more</span>
      </TopTypo>
      <HedBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Image src={logo192.png}/>
          <TritBar>Tariff</TritBar>
          <Select>
          <MenuItem  disabled value="">
            <em>What's new?</em>
          </MenuItem>
          <MenuItem>store</MenuItem>
          <MenuItem>Inter-city travels</MenuItem>
          </Select>
          <TritBar>Offer</TritBar>
          <Select>
          <MenuItem disabled value="">
            <em>Partnet with us</em>
          </MenuItem>
          <MenuItem>Earn with us</MenuItem>
          <MenuItem>Own a franchise</MenuItem>
          </Select>
        </Toolbar>
      </HedBar>
    </div>
  );
};
