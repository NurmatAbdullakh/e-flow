import { type Category, type Webinar } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "View all",
  },
  {
    id: 2,
    name: "Finance Fundamentals",
  },
  {
    id: 3,
    name: "Stock Screening",
  },
  {
    id: 4,
    name: "Strategies",
  },
  {
    id: 5,
    name: "Instruments",
  },
  {
    id: 6,
    name: "Risk Management",
  },
  {
    id: 7,
    name: "Case Studies",
  },
];

export const webinars: Webinar[] = [
  {
    id: 1,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Strategies",
    image: "/Image.png",
    status: "Live",
    createdAt: "2024-01-15",
    duration: "2 hours",
    attendees: 150,
  },
  {
    id: 2,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Fundamentals",
    image: "/Image.png",
    status: "Scheduled",
    createdAt: "2024-01-14",
    duration: "1.5 hours",
    attendees: 89,
  },
  {
    id: 3,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Risk Management",
    image: "/Image.png",
    status: "Completed",
    createdAt: "2024-01-13",
    duration: "2.5 hours",
    attendees: 203,
  },
  {
    id: 4,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Instruments",
    image: "/Image.png",
    status: "Live",
    createdAt: "2024-01-12",
    duration: "1 hour",
    attendees: 75,
  },
  {
    id: 5,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Strategies",
    image: "/Image.png",
    status: "Scheduled",
    createdAt: "2024-01-11",
    duration: "3 hours",
    attendees: 0,
  },
  {
    id: 6,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Fundamentals",
    image: "/Image.png",
    status: "Completed",
    createdAt: "2024-01-10",
    duration: "2 hours",
    attendees: 178,
  },
  {
    id: 7,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Risk Management",
    image: "/Image.png",
    status: "Live",
    createdAt: "2024-01-09",
    duration: "1.5 hours",
    attendees: 92,
  },
  {
    id: 8,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Instruments",
    image: "/Image.png",
    status: "Scheduled",
    createdAt: "2024-01-08",
    duration: "2 hours",
    attendees: 0,
  },
  {
    id: 9,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Risk Management",
    image: "/Image.png",
    status: "Completed",
    createdAt: "2024-01-07",
    duration: "2.5 hours",
    attendees: 156,
  },
  {
    id: 10,
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Instruments",
    image: "/Image.png",
    status: "Live",
    createdAt: "2024-01-06",
    duration: "1 hour",
    attendees: 67,
  },
];
