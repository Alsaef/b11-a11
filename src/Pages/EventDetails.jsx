// pages/EventDetails.jsx
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
const event=useLoaderData()

  return (
    <section className="min-h-screen py-10 px-4 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <img src={event.thumbnail} className="w-full h-64 object-cover rounded-md mb-6" alt={event.title} />
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm text-gray-600 mb-1">Type: {event.eventType}</p>
        <p className="text-sm text-gray-600 mb-1">Date: {new Date(event.eventDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-600 mb-4">Location: {event.location}</p>
        <p>{event.description}</p>
        <div>
            <button className="btn btn-primary w-full my-5">Join event</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
