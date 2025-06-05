// pages/UpcomingEvents.jsx
import React, { useState } from "react";
import useUpcomingEvents from "../hooks/useUpcommingEvent";
import EventCard from "../Components/EventCard";
import Loading from "../Components/Loading";
const eventTypes = [
    "All", "Cleanup", "Plantation", "Awareness Campaign", "Donation",
];

const UpcomingEvents = () => {
    const [filterType, setFilterType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { events, isLoading, error } = useUpcomingEvents(filterType, searchTerm);

    return (
        <section className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="input input-bordered w-full sm:max-w-xs"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="select select-bordered w-full sm:w-40"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        {eventTypes.map((t) => (
                            <option key={t} value={t==='All'?'':t}>{t}</option>
                        ))}
                    </select>
                </div>

                {/* Status & Cards */}
                {isLoading && <Loading></Loading>}
                {error && <p className="text-center text-red-500">Error loading events</p>}
                {!isLoading && events.length === 0 && <p className="text-center text-red-500 font-semibold text-2xl">No events found.</p>}

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
