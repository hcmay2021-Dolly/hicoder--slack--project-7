import { Button } from "@mui/material";
import "./Chats.scss";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Shubh from "../Images/subh.jpg";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Chats = () => {
  return (
    <>
      <div className="chats">
        <Button className="chats--date">
          Tuesday, November 25th
          <KeyboardArrowDownOutlinedIcon color="action" />
        </Button>
        <div className="chats--singleChat">
          <div className="chats--singleChat--img">
            <img src={Shubh} alt="Naga" className="chats--singleChat--imge" />
          </div>
          <div className="chats--singleChat--details">
            <div style={{ display: "flex" }}>
              <h3>Subh</h3>
              <p className="chats--singleChat--details--time">07:15 AM</p>
            </div>
            <p className="chats--singleChat--details--meggage">
              <span>@channel</span> Hello Guys, Today we got one new big
              project. So congratulation & cheers!
            </p>
          </div>
        </div>
        <div className="chats--reaction">
          <AddReactionIcon className="chats--reaction--icon" />
          <ChatIcon className="chats--reaction--icon" />
          <ShareIcon className="chats--reaction--icon" />
          <BookmarkBorderIcon className="chats--reaction--icon" />
          <PushPinIcon className="chats--reaction--icon chats--reaction--icon--pin" />
          <MoreVertIcon className="chats--reaction--icon" />
        </div>

        {messages.map((message) => {
              return <> 
              <div className="chats--singleChat">
          <div className="chats--singleChat--img">
            <img src={message.img} alt={message.name} className="chats--singleChat--imge" />
          </div>
          <div className="chats--singleChat--details">
            <div style={{ display: "flex" }}>
              <h3>{message.name}</h3>
              <p className="chats--singleChat--details--time">{message.time}</p>
            </div>
            <p className="chats--singleChat--details--meggage">
              <span>{message.tag}</span> {message.msg}
            </p>
          </div>
        </div>
        <div className="chats--reaction">
          <AddReactionIcon className="chats--reaction--icon" />
          <ChatIcon className="chats--reaction--icon" />
          <ShareIcon className="chats--reaction--icon" />
          <BookmarkBorderIcon className="chats--reaction--icon" />
          <PushPinIcon className="chats--reaction--icon chats--reaction--icon--pin" />
          <MoreVertIcon className="chats--reaction--icon" />
        </div>
              
              </>
            })}
            


       
      </div>
    </>
  );
};

export default Chats;

let messages=[
    {
        name: "Rana",
        img: process.env.PUBLIC_URL + "../Images/rana.jpg",
        time:"7:25AM",
        tag: "@channel",
        msg:" Hello Everyone, We got one new big project today. So congratulation & cheers!"
    },
    {
        name: "Dolly",
        img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
        time:"7:30AM",
        tag: "@Rana",
        msg:"yeyyyy!",
    },
    {
        name: "subh",
        img: process.env.PUBLIC_URL + "../Images/subh.jpg",
        time:"7:25AM",
        tag: "@channel",
        msg:"You will be having meeting so please be ready for it."
    },
    {
        name: "Anand P",
        img: process.env.PUBLIC_URL + "../Images/anand.jpg",
        time:"7:33AM",
        tag: "@Shubh",
        msg:"Okay.",
    },
    {
        name: "Sahmitha",
        img: process.env.PUBLIC_URL + "../Images/sam.jpg",
        time:"7:35AM",
        tag: "@Rana",
        msg:"Thank you!🤩"
    },
    {
        name: "NAGARAJU KATTA",
        img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
        time:"8:30AM",
        tag: "@channel",
        msg:"Hello Everyone, We have meeting in 10 minutes in meeting room."
    },
    {
        name: "Dolly",
        img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
        time:"7:30AM",
        tag: "@NAGARAJU KATTA",
        msg:" Sir Okay!",
    },
    {
        name: "Shashank",
        img: process.env.PUBLIC_URL + "../Images/shashank.jpg",
        time:"7:35AM",
        tag: "@channel",
        msg:"ok"
    },
    {
        name: "Amegh",
        img: process.env.PUBLIC_URL + "../Images/amegh.jpg",
        time:"7:35AM",
        tag: "@NAGARAJU KATTA",
        msg:" sir Okay..."
    },
]