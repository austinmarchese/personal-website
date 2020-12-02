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
        eventDescription: "Co-found a tech company that's goal is to change how users experience podcasts. Stay tuned :)",
        eventType: EXPERIENCE,
        eventThumbnail: require('./Banter_logo_dark.png'),
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
        eventTitle: "Explore the Country",
        eventDescription: "Relocated to Aventura, Florida for 8 weeks, currently living in San Diego",
        eventType: Travel,
        eventThumbnail: require('./SanDiego.jpg'),
        eventDate: '2020-09-01',
      },

]


// Python, JavaScript, AWS, Netflify, Cloud Foundry, Vue
// React Native, Java, Angular
const skills = {

    languages: [
        {
            skill: "Python",
            rating: 4.5
        },
        {
            skill: "TypeScript",
            rating: 4
        },
        {
            skill: "HTML/CSS",
            rating: 4.5
        },
        {
            skill: "JavaScript",
            rating: 4
        },
        {
            skill: "Java",
            rating: 3
        },
    ],
    frameworks: [
        {
            skill: "Vue",
            rating: 4.5
        },
        {
            skill: "Angular",
            rating: 4.5
        },
        {
            skill: "React Native",
            rating: 4.5
        },
        {
            skill: "React",
            rating: 4
        },
        {
            skill: "Flask",
            rating: 4
        },
        {
            skill: "Tornado",
            rating: 4
        },
    ],
    other: [
        {
            skill: "AWS",
            rating: 3
        },
        {
            skill: "Cloud Foundry",
            rating: 4
        },
        {
            skill: "Figma",
            rating: 4
        },
        {
            skill: "Redux",
            rating: 3.5
        },
        {
            skill: "Web Scraping",
            rating: 4.5
        },
        {
            skill: "Cryptocurrencies",
            rating: 4.5
        },
    ],
}

const locations = [
  {
    image: require('./SanDiego.jpg'),
    location: 'United States',
    details: 'DETAILS',
    countryCode: 'US',
    countryColor: 1,
  },
  {
    image: require('./Mexico.png'),
    location: 'Mexico',
    details: 'Cancun',
    countryCode: 'MX',
    countryColor: 1,
  },
  {
    image: require('./Canada.png'),
    location: 'Canada',
    details: 'DETAILS',
    countryCode: 'CA',
    countryColor: 1,
  },
  {
    image: require('./Prague.png'),
    location: 'Czech Republic',
    details: 'Prague',
    countryCode: 'CZ',
    countryColor: 1,
  },

  {
    image: require('./Budapest.png'),
    location: 'Hungary',
    details: 'Budapest',
    countryCode: 'HU',
    countryColor: 1,
  },
  {
    image: require('./Vienna.png'),
    location: 'Austria',
    details: 'Vienna',
    countryCode: 'AT',
    countryColor: 1,
  },
  {
    image: require('./Spain.png'),
    location: 'Spain',
    details: 'DETAILS',
    countryCode: 'ES',
    countryColor: 1,
  },

  {
  image: require('./Florence.png'),
  location: 'Italy',
  details: 'Florence',
  countryCode: 'IT',
  countryColor: 1,
},
{
  image: require('./Germany.png'),
  location: 'Germany',
  details: 'DETAILS',
  countryCode: 'DE',
  countryColor: 1,
},
{
  image: require('./Portugal.png'),
  location: 'Portugal',
  details: 'Portugal',
  countryCode: 'PT',
  countryColor: 1,
},

{
  image: require('./Amsterdam.png'),
  location: 'Amsterdam',
  details: 'DETAILS',
  countryCode: 'AW',
  countryColor: 1,
},
{
  image: require('./Switzerland.png'),
  location: 'Switzerland',
  details: 'DETAILS',
  countryCode: 'CH',
  countryColor: 1,
},
{
  image: require('./France.png'),
  location: 'France',
  details: 'DETAILS',
  countryCode: 'FR',
  countryColor: 1,
},
]

const PERSONAL_INFO = {
    Skills : skills,
    Events: events,
    Locations: locations,

}


export default PERSONAL_INFO;


