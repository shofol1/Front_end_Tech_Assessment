import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import style from "./EventDetails.module.css";
import CakeImage from "../../images/cake.png";
import { FaAngleRight } from "react-icons/fa";
export default function EventDetails() {
  const fakeResponse = [
    {
      response: 14,
      eventDetails: {
        from: "18 Auguest 6 PM",
        to: "19 Auguest 1 PM ",
      },
      address: {
        street: "301,Rowes Lan ,WA ,7183",
      },
      link: {
        url: "www.netflix.com",
      },
      icons: ["🗓", "📍", "🔗"],
    },
  ];
  console.log(fakeResponse);
  return (
    <>
      <div className={`${style.eventDetailsWrapper}`}>
        <Image src={CakeImage} className={`${style.cakeImage}`} />
        <h2 className={`mt-2 mb-2 p-2 ${style.innerSectionWidth}`}>
          Movie Night
        </h2>
        <p className={`${style.innerSectionWidth}`}>👋 Hosted by Elysia</p>
        <div className={`${style.innerSectionWidth} ${style.responses} mt-3`}>
          <Row className="d-flex align-items-center">
            <Col md={8} className="">
              🤝 {fakeResponse[0].response} responses .<a href="">See guest</a>
            </Col>
            <Col md={4}>
              <Button className={style.inviteBtn}>Invite</Button>
            </Col>
          </Row>
        </div>
        <div className="mt-3 p-2">
          {fakeResponse.map((details) => {
            return (
              <div>
                <Row
                  className={`${style.innerSectionWidth} d-flex align-items-center ms-3`}
                >
                  <Col md={2}>
                    <span className={style.icon}> {details.icons[0]}</span>
                  </Col>
                  <Col md={8} className="ms-2">
                    <h6 className={style.eventDetailText}>
                      {details.eventDetails.from}
                    </h6>
                    <span>
                      to{" "}
                      <span className="fw-bold">
                        {" "}
                        {details.eventDetails.to}
                      </span>
                      UTC +10
                    </span>
                  </Col>
                  <Col md={1}>
                    <FaAngleRight className={style.arrowIcon} />
                  </Col>
                </Row>
                <Row
                  className={`${style.innerSectionWidth} d-flex align-items-center ms-3 mt-4`}
                >
                  <Col md={2}>
                    <span className={style.icon}> {details.icons[1]}</span>
                  </Col>
                  <Col md={8} className="ms-2">
                    <h6 className={style.eventDetailText}>Street Name</h6>

                    <span className={style.eventDetailParaText}>
                      {" "}
                      {details.address.street}
                    </span>
                  </Col>
                  <Col md={1}>
                    <FaAngleRight className={style.arrowIcon} />
                  </Col>
                </Row>
                <Row
                  className={`${style.innerSectionWidth} d-flex align-items-center ms-3 mt-4`}
                >
                  <Col md={2}>
                    <span className={style.icon}> {details.icons[2]}</span>
                  </Col>
                  <Col md={8} className="ms-2">
                    <h6 className={style.eventDetailText}>Link</h6>

                    <span className={style.eventDetailParaText}>
                      {" "}
                      {details.link.url}
                    </span>
                  </Col>
                  <Col md={1}>
                    <FaAngleRight className={style.arrowIcon} />
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
