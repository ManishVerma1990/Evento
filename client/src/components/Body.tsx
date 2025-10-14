import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const EventsPage: React.FC = () => (
  <div>
    <h2>Events Page</h2>
  </div>
);
const EventPage: React.FC = () => (
  <div>
    <h2>Event Details Page</h2>
  </div>
);
const HomePage: React.FC = () => (
  <div>
    <h2>Welcome to Event Management App!</h2>
  </div>
);

const Body: React.FC = () => {
  return (
    <div className="p-4 flex-grow-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
};

export default Body;
