// For Icon options refernce material icons
// https://material.io/resources/icons/?icon=flight_takeoff&style=baseline

const EXPERIENCE = {
    color: "blue",
    category: "Experience",
    icon: "fingerprint",
};

const FAILURE = {
    color: "red",
    category: "Failure",
    icon: "error",
};

const ACCOMPLISHMENT = {
    color: "green",
    category: "Accomplishment",
    icon: "trending_up",
};

const Travel = {
    color: "purple",
    category: "Travel",
    icon: "flight_takeoff",
};

const events = [
    {
        eventTitle: "First Day of Life",
        eventDescription: "",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '1996-07-16',
      },
      {
        eventTitle: "Attended Northport High School (NHS)",
        eventDescription: "",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2010-09-05',
      },
      {
        eventTitle: "Cut from Basketball",
        eventDescription: "Cut from NHS JV Basketball team",
        eventType: FAILURE,
        eventThumbnail: "",
        eventDate: '2011-01-05',
      },
      {
        eventTitle: "Long Island Basketball Champion",
        eventDescription: "Top Highschool Basketball team on Long Island, awarded top Male Athlete at NHS",
        eventType: ACCOMPLISHMENT,
        eventThumbnail: require('./northport_highschool.jpg'),
        eventDate: '2014-01-05',
      },
      {
        eventTitle: "Attended Stevens Instutute of Technology (SIT)",
        eventDescription: "Went to SIT to play college basketball and study mechanical engineering",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2014-09-05',
      },
      {
        eventTitle: "Europe Part 1",
        eventDescription: "21 Day backpacking trip accross Europe",
        eventType: Travel,
        eventThumbnail: "",
        eventDate: '2017-05-06',
      },
      {
        eventTitle: "Graduate with a 4.0",
        eventDescription: "Graduated from SIT with a 4.0 in Mechanical Engineering",
        eventType: ACCOMPLISHMENT,
        eventThumbnail: "",
        eventDate: '2018-05-05',
      },
      {
        eventTitle: "Denied Valedictorian",
        eventDescription: "Denied Valedictorian award because of a late grade change and SIT telling me that they already 'Printed the Pamphlets' for Graduation",
        eventType: FAILURE,
        eventThumbnail: "",
        eventDate: '2018-05-05',
      },
      {
        eventTitle: "Europe Part 2",
        eventDescription: "25 Day backpacking trip accross Europe",
        eventType: Travel,
        eventThumbnail: "",
        eventDate: '2018-05-06',
      },
      {
        eventTitle: "Denied by Harvard Business School",
        eventDescription: "1 of 200 finalists to get interviewed for a 2 year differred MBA program, denied because I 'lacked passion and career direction' as a 22 year old",
        eventType: FAILURE,
        eventThumbnail: "",
        eventDate: '2018-06-05',
      },
      {
        eventTitle: "Start at J.P. Morgan as a Software Engineer",
        eventDescription: "Begin software engineering career without any experience or formal schooling",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2018-09-05',
      },
      {
        eventTitle: "Harborside Capital LLC Established",
        eventDescription: "Obtained Real Estate License, Started a Real Estate Investment Company and aquired first property in Hoboken, NJ.",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2019-07-05',
      },
      {
        eventTitle: "Top Technology Analyst",
        eventDescription: "Recognized as top performing Technology Analyst in the Coprorate Technology Org at JPM",
        eventType: ACCOMPLISHMENT,
        eventThumbnail: "",
        eventDate: '2020-01-05',
      },
      {
        eventTitle: "The start of Banter Audio",
        eventDescription: "Co-found a tech company that's goal is to change how users experince podcasts. Stay tuned :)",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2020-05-05',
      },
      {
        eventTitle: "7 Day Hospital Trip",
        eventDescription: "Spent 7 days in a Hosptial recovering from a complicated Appendicitis case.",
        eventType: EXPERIENCE,
        eventThumbnail: "",
        eventDate: '2020-07-16',
      },
      {
        eventTitle: "Move to Florida",
        eventDescription: "Relocated to Florida for 7 weeks",
        eventType: Travel,
        eventThumbnail: "",
        eventDate: '2020-09-01',
      },
      {
        eventTitle: "Move to SanDiego",
        eventDescription: "Relocated to San Diego for the foreseeable future",
        eventType: Travel,
        eventThumbnail: "",
        eventDate: '2020-11-01',
      },

]

export default events;


