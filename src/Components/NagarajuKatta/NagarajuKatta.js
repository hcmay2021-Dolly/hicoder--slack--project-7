import React from "react";
import "./NagarajuKatta.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chats from "./Chats";

const NagarajuKatta = () => {
  return (
    <>
      <div className="nagarajuKatta">
        <div className="nagarajuKatta--header">
          <Button color="inherit">
            <h2 style={{padding:"18px"}}>#Nagaraju Katta</h2> <KeyboardArrowDownIcon />
          </Button>
          <AvatarGroup max={5}>
            {team.map((Image) => {
              return <Avatar alt={Image.alt} src={Image.img} />;
            })}
          </AvatarGroup>
        </div>
        <Chats />
      </div>
    </>
  );
};

export default NagarajuKatta;

const team = [
  {
    alt: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
  },
  {
    alt: "nagaraju",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
  },

  {
    alt: "sam",
    img: process.env.PUBLIC_URL + "../Images/sam.jpg",
  },
  {
    alt: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
  },
  {
    alt: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
  },
  {
    alt: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
  },

  {
    alt: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
  },
  {
    alt: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
  },
];
