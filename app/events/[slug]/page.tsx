import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// A reusable component for displaying event details with an icon and label
const EventDetailsItem = ({icon,alt,label}:{icon:string,alt:string,label:string})=>( 
    <div className="flex-row-gap-2 items-center">
        <Image src={icon} alt={alt} width={16} height={16} />
        <p>{label}</p>
    </div>
) 

// A reusable component for displaying the event agenda as a list
const EventAgenda = ({agendaItems}:{agendaItems:string[]})=>(
    <div className="agenda">
        <h2>Agenda</h2>
        <ul className="agenda-list">
            {agendaItems.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
)

// A reusable component for displaying event tags as pills
const EventTags = ({tags}:{tags:string[]})=>(
    <div className="flex flex-row gap-1.5 flex-wrap">
        {tags.map((tag)=>(
            <div className="pill" key={tag}>
                {tag}
            </div>
        ))}
    </div>
)

const EventDetails = async ({params}:{params : Promise<{slug:string }>}) => { // Extract the slug from the params object
  const { slug } = await params; // Now we can use the slug variable in your component logic

  // We will use a try-catch block to handle any errors that may occur during the fetch operation
  let event;
  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {
        next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });
    if (!request.ok) {
        if (request.status === 404) {
            return notFound(); // If the event is not found, return a 404 page
        }
        throw new Error(`Failed to fetch event: ${request.statusText}`); // For other errors, throw an error to be caught in the catch block
    }
    const response = await request.json();
    event = response.event; // Assuming the API response has an 'event' field containing the event details
     
    if(!event) {
        return notFound(); // If the event data is not available, return a 404 page
    }
  }catch (error) {
    console.error('Error fetching event data:', error);
    return notFound(); // In case of any error during fetching, return a 404 page
  }
  // Fetch the event details from the API
  const {description,image,overview,title,date,location,mode,agenda,audience,time,tags,organizer}=event; // Destructure the event details from the API response
  
// If the description is not available, we can assume the event was not found and return a 404 page
  if (!description) return notFound(); 

  const bookings = 10; // Placeholder for the number of bookings, you can replace this with actual data from your API if available
  
  const similarEvents  : IEvent[]  = await  getSimilarEventsBySlug(slug); // Fetch similar events using the slug, this will return an array of events that share at least one tag with the current event, excluding the current event itself

  return (
    <div> 
        <section id='event'> 
           <div className="header">
            <h1>Event Description</h1>
            <p>{description}</p>
           </div>

            <div className="details">
                {/* Left Side - Event Content */}
                <div className="content">
                    <Image src={image} alt={title} width={800} height={800} className="event-image" />

                    <section className="flex-col-gap-2">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>

                    <section className="flex-col-gap-2">
                        <h2>Event Details</h2>
                        <EventDetailsItem icon="/icons/calendar.svg" alt="date" label={date} />
                        <EventDetailsItem icon="/icons/clock.svg" alt="clock" label={time} />
                        <EventDetailsItem icon="/icons/pin.svg" alt="mode" label={location} />
                        <EventDetailsItem icon="/icons/mode.svg" alt="mode" label={mode} />
                        <EventDetailsItem icon="/icons/audience.svg" alt="audience" label={audience} />    
                    </section>

                    <EventAgenda agendaItems={agenda } />

                    <section>
                        <h2>About the Organizer</h2>
                        <p>{organizer}</p>
                    </section>

                    <EventTags tags={tags} />

                </div>
                {/* Right Side- Event Booking Form */ }
                <aside className="booking">
                    <div className="signup-card">
                        <h2>Book your spot</h2>
                        {bookings > 0 ? (
                           <p>
                            Join {bookings} people already booked for this event.Do not miss out!
                           </p> 
                        ):(
                            <p>Be the first to book for this event!</p>
                        )}
                        
                        <BookEvent />
           

                    </div>
                </aside>
            </div>

            <div className="flex w-full flex-col gap-4 pt-20">
                <h2>Similar Events</h2>
                <div className="events">
                        {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent)=>(
                            <EventCard key={similarEvent.title} {...similarEvent} />
                        ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default EventDetails
