import { Button } from "react-bootstrap";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EventDetails from "./components/EventsDetails/EventDetails";
import "./App.css";

function App() {
  return (
    <div className="d-flex justify-content-evenly align-items-center app">
      <EventDetails />
      <CreateEvent />
    </div>
  );
}

export default App;
