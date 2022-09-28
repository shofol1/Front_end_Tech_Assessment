import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";
import cakeImage from "../../../images/Birthdaycake.png";
import style from "./EventPage.module.css";

export default function EventPage() {
  return (
    <div className={`${style.evenPageWrapper} mt-5`}>
      <Row className="g-0">
        <Col md={6}>
          <h1>Birthday Bash</h1>
          <p>Hosted by Elysia</p>
          <div className={style.details}>
            <Row className={style.rowWrapper}>
              <Col md={2} className={style.marginTop}>
                <span className={`${style.iconWrapper} mt-3`}>
                  <FaCalendarDay className={style.icon} />
                </span>
              </Col>
              <Col md={7}>
                <h6 className="fw-bold">18 August 6:00PM</h6>
                <span>
                  to <span className="fw-bold">19 August 1:00PM </span> UTC +10
                </span>
              </Col>
            </Row>
          </div>
          <div className="mt-4 ">
            <Row className={style.rowWrapper}>
              <Col md={2} className={style.marginTop}>
                <span className={`${style.iconWrapper} mt-3`}>
                  <FaLocationArrow className={style.icon} />
                </span>
              </Col>
              <Col md={7}>
                <h6 className="fw-bold">Street name</h6>
                <span>Suburb, State, Postcode</span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <Image src={cakeImage} className={style.image} />
        </Col>
      </Row>
    </div>
  );
}
