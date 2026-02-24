// TypeScript
// lib/constants.ts

export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time : string; // Optional time string (e.g., "18:00")
  location: string; // "City, Country" or "Online"
  image: string; // path under public/
  url: string; // official event page
  tags?: string[];
  description?: string;
};

export const events: EventItem[] = [
  {
    id: "react-summit-2026",
    title: "React Summit 2026",
    date: "2026-06-14",
    time: "18:00",
    location: "Amsterdam, Netherlands",
    image: "/images/event1.png",
    url: "https://reactsummit.com/",
    tags: ["React", "Frontend", "JavaScript", "Conference"],
    description: "The world’s largest React conference bringing together the community, core team members, and industry leaders."
  },
  {
    id: "kubecon-eu-2026",
    title: "KubeCon + CloudNativeCon Europe 2026",
    date: "2026-05-19",
    time: "09:00",
    location: "Dublin, Ireland",
    image: "/images/event2.png",
    url: "https://kubecon.io/",
    tags: ["Kubernetes", "Cloud Native", "DevOps", "Conference"],
    description: "Flagship event by the CNCF, featuring Kubernetes, observability, platform engineering, and cloud-native tech."
  },
  {
    id: "jsconf-asia-2026",
    title: "JSConf Asia 2026",
    date: "2026-07-10",
    time: "10:00",
    location: "Singapore",
    image: "/images/event3.png",
    url: "https://jsconf.com/",
    tags: ["JavaScript", "Web", "Conference"],
    description: "A community-driven JavaScript conference showcasing the latest in the web ecosystem."
  },
  {
    id: "gophercon-2026",
    title: "GopherCon 2026",
    date: "2026-09-21",
    time: "09:00",
    location: "Denver, USA",
    image: "/images/event4.png",
    url: "https://www.gophercon.com/",
    tags: ["Go", "Backend", "Performance"],
    description: "The largest gathering of the Go programming language community."
  },
  {
    id: "hackzurich-2026",
    title: "HackZurich 2026",
    date: "2026-09-18",
    time: "18:00",
    location: "Zurich, Switzerland",
    image: "/images/event5.png",
    url: "https://hackzurich.com/",
    tags: ["Hackathon", "AI", "IoT", "FinTech"],
    description: "One of Europe’s biggest hackathons with global participants building solutions over an intensive weekend."
  },
  {
    id: "pycon-us-2026",
    title: "PyCon US 2026",
    date: "2026-04-24",
    time: "09:00",
    location: "Pittsburgh, USA",
    image: "/images/event6.png",
    url: "https://us.pycon.org/",
    tags: ["Python", "Data", "Backend"],
    description: "Annual Python conference in the United States with talks, tutorials, and sprints."
  },
  {
    id: "aws-reinvent-2026",
    title: "AWS re:Invent 2026",
    date: "2026-12-01",
    time: "09:00",
    location: "Las Vegas, USA",
    image: "/images/event-full.png",
    url: "https://reinvent.awsevents.com/",
    tags: ["Cloud", "Serverless", "AI/ML", "Conference"],
    description: "Amazon’s premier cloud conference featuring keynotes, workshops, and launches."
  },
  {
    id: "f8-2026",
    title: "Meta F8 Refresh 2026",
    date: "2026-06-05",
    time: "10:00",
    location: "Online",
    image: "/images/event3.png",
    url: "https://developers.facebook.com/f8/",
    tags: ["API", "Social", "AI"],
    description: "Developer conference focusing on Meta’s platforms, APIs, and emerging technologies."
  },
  {
    id: "devoxx-belgium-2026",
    title: "Devoxx Belgium 2026",
    date: "2026-10-12",
    time: "09:00",
    location: "Antwerp, Belgium",
    image: "/images/event4.png",
    url: "https://devoxx.be/",
    tags: ["Java", "JVM", "Architecture"],
    description: "A premier conference for Java and JVM developers with deep-dive talks and hands-on sessions."
  },
  {
    id: "web-summit-2026",
    title: "Web Summit 2026",
    date: "2026-11-03",
    time: "09:00",
    location: "Lisbon, Portugal",
    image: "/images/event5.png",
    url: "https://websummit.com/",
    tags: ["Startup", "Product", "AI", "Conference"],
    description: "One of the largest technology conferences bringing together startups, investors, and engineers."
  },
  {
    id: "hack-the-north-2026",
    title: "Hack the North 2026",
    date: "2026-09-11",
    time: "18:00",
    location: "Waterloo, Canada",
    image: "/images/event1.png",
    url: "https://hackthenorth.com/",
    tags: ["Hackathon", "Student", "Full-Stack"],
    description: "Canada’s biggest hackathon, welcoming students worldwide to build impactful projects."
  },
  {
    id: "ng-conf-2026",
    title: "ng-conf 2026",
    date: "2026-08-26",
    time: "09:00",
    location: "Salt Lake City, USA",
    image: "/images/event2.png",
    url: "https://www.ng-conf.org/",
    tags: ["Angular", "Frontend", "TypeScript"],
    description: "The original Angular conference featuring core team talks, workshops, and community sessions."
  }
];
