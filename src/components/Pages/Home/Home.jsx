import React from "react";
import CreateEvent from "../../CreateEvent/CreateEvent";
import EventDetails from "../../EventsDetails/EventDetails";

export default function Home() {
  return (
    <div className="d-flex justify-content-evenly align-items-center app">
      <EventDetails />
      <CreateEvent />
    </div>
  );
}
