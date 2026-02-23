import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const events = [
  {image : "/images/event1.png", title : "Event 1", slug : "event-1", location : "location-1", date : "Date-1" ,time :"time-"},
]

const page = () => {
  return (
    <section>
        <h1 className="text-center">
          The Hub For Every Dev <br/>Even You Cant Miss
        </h1>
        <h4 className="text-center mt-5">Hackathons,Meetups and Conferences,All in One Package</h4>
        <ExploreBtn />
        <div className="mt-20 space-y-7">

          <h3>Featured Events</h3>

          <ul className="events">
            {events.map((event)=>(
              <li key={event.title}>
              <EventCard {...event}/>
              </li>
            ))}
          </ul>
        </div>
    </section>
    
  )
}

export default page
