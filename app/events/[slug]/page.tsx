import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Reusable component for event details row
const EventDetailsItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={16} height={16} />
    <p>{label}</p>
  </div>
);

// Agenda component
const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul className="agenda-list">
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

// Tags component
const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);

const EventDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  await connectDB();

  const event = await Event.findOne({ slug }).lean();

  if (!event) return notFound();

  const {
    description,
    image,
    overview,
    title,
    date,
    location,
    mode,
    agenda,
    audience,
    time,
    tags,
    organizer,
  } = event;

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <div>
      <section id="event">
        <div className="header">
          <h1>Event Description</h1>
          <p>{description}</p>
        </div>

        <div className="details">
          {/* LEFT SIDE */}
          <div className="content">
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className="event-image"
            />

            <section className="flex-col-gap-2">
              <h2>Overview</h2>
              <p>{overview}</p>
            </section>

            <section className="flex-col-gap-2">
              <h2>Event Details</h2>
              <EventDetailsItem icon="/icons/calendar.svg" alt="date" label={date} />
              <EventDetailsItem icon="/icons/clock.svg" alt="clock" label={time} />
              <EventDetailsItem icon="/icons/pin.svg" alt="location" label={location} />
              <EventDetailsItem icon="/icons/mode.svg" alt="mode" label={mode} />
              <EventDetailsItem icon="/icons/audience.svg" alt="audience" label={audience} />
            </section>

            <EventAgenda agendaItems={agenda} />

            <section>
              <h2>About the Organizer</h2>
              <p>{organizer}</p>
            </section>

            <EventTags tags={tags} />
          </div>

          {/* RIGHT SIDE */}
          <aside className="booking">
            <div className="signup-card">
              <h2>Book your spot</h2>

              {bookings > 0 ? (
                <p>
                  Join {bookings} people already booked for this event. Do not
                  miss out!
                </p>
              ) : (
                <p>Be the first to book for this event!</p>
              )}

              <BookEvent eventId={event._id} slug={event.slug} />
            </div>
          </aside>
        </div>

        {/* SIMILAR EVENTS */}
        <div className="flex w-full flex-col gap-4 pt-20">
          <h2>Similar Events</h2>

          <div className="events">
            {similarEvents.length > 0 &&
              similarEvents.map((similarEvent: IEvent) => (
                <EventCard key={similarEvent.slug} {...similarEvent} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;