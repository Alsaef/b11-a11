// pages/ManageEvents.jsx
import React from "react";


import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import useMyEvent from "../hooks/useMyEvent";

const ManageEvents = () => {
  const { events, isLoading, error } = useMyEvent();

  if (isLoading) return <Loading />;
  
  return (
    <section className="min-h-screen py-12 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Manage My Events</h2>

        {events.length === 0 ? (
          <p className="text-center text-3xl text-red-400">You haven’t created any events yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event._id} className="card bg-white shadow-md p-6 rounded-lg">
                <img src={event.thumbnail} alt={event.title} className="rounded-md h-48 w-full object-cover mb-4" />
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.eventType}</p>
                <p className="text-sm mt-2 mb-4">{event.description.slice(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/update-event/${event._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Update
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageEvents;
