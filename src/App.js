import { Button } from "react-bootstrap";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EventDetails from "./components/EventsDetails/EventDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import CreateEventPage from "./components/Pages/CreateEventPage/CreateEventPage";
import EventPage from "./components/Pages/EventPage/EventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
