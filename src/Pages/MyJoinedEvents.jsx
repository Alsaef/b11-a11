import { FaLocationArrow } from "react-icons/fa";
import Loading from "../Components/Loading";
import useMyJoinEvent from "../hooks/useMyJoinEvent";

const MyJoinedEvents = () => {
  const { events, isLoading } = useMyJoinEvent();

  if (isLoading) return <Loading />;

  return (
    <section className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Joined Events</h2>
 {!isLoading && events.length === 0 && <p className="text-center text-red-500 font-semibold text-2xl">No events found.</p>}
        { 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-2.5"><FaLocationArrow/> {event.location}</span>
                    <span>{new Date(event.eventDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
};

export default MyJoinedEvents;

