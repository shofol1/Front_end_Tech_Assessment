import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./CreateEvent.module.css";
export default function CreateEvent() {
  return (
    <div className={style.createEventWrapper}>
      <h1 className={style.leftText}>
        Imagine if <br /> <span className={style.snapchatText}>SnapChat</span>
        <br /> had events.
      </h1>
      <p className={style.leftParagaraphText}>
        Easily host and share events with your friends <br /> across any social
        media.
      </p>
      <Link to="/create">
        <Button className={style.customEventBtn}>🎉 Create my event</Button>
      </Link>
    </div>
  );
}
