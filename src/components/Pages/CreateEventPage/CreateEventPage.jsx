import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import style from "./CreateEventPage.module.css";
export default function CreateEventPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  return (
    <div className="w-50 mx-auto mt-5">
      <h1>Create a Event</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Host Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Start Date</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>End Date</Form.Label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setendDate(date)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Name" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Event Photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Link to="/event">
          {" "}
          <Button variant="primary" className={style.btn} type="submit">
            next
          </Button>
        </Link>
      </Form>
    </div>
  );
}
