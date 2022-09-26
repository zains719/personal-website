import { Peerr, Thatpart, Krowd9 } from '../images/experiences';

export const Experiences = [
    {
        title: "Microsoft",
        role: "Software Engineer Intern",
        date: "JUN 2022 - SEPT 2022",
        description: [
            "The team I worked with was responsible for Microsoft's internal telemtry pipeline.",
            "I developed an end-to-end streaming pipeline for translating Reflex Triggers - these are defined patterns on aggregated data that drive action alerts.",
            "Using Spark Structured Streaming I implemented both stateless and stateful aggregation triggers, incorporating window and watermarking semantics.",
            "I delivered a visualisation dashboard, using internal tools, to monitor and assess pipeline results through sending different telemetry metrics.",
            "This involved utilising different cloud services such as Event Hubs and Azure Synapse to send data to a source more compatible with the streaming fabric.",
            "This was finalised with end-to-end correctness tests obtained through querying results against original data, using an internal query language."
        ],
        link: "https://www.microsoft.com/en-gb/",
        icon: <Peerr />
    },
    {
        title: "Peerr",
        role: "Software Engineer Intern",
        date: "JUL 2021 - SEPT 2021",
        description: [
            "Peerr is a social online learning platform, geared towards peer to peer learning through interactive, custom made quizzes.",
            "At Perrr, I collaborated in a team of 5 to deliver the MVP in preparation for the King's 20 Accelerator Programme.",
            "This involved building a B2C product from the ground up, as I worked on both the product build and business strategy.",
            "I Developed both the front and backend of the web application using React and Next js, with firebase serving as a NoSql database and authentication provider."
        ],
        link: "https://peerr.io/",
        icon: <Peerr />
    },
    {
        title: "Thatpart",
        role: "Software Engineer Intern",
        date: "JUN 2021 - JUL 2021",
        description: [
            "Thatpart is a podcast media platform, that facilitates saving and sharing podcast clips through the ease of a screenshot!",
            "During the internship, I developed web and app features, furthering my React and Next js proficiency.",
            "Using Remotion and Three js, I also programmatically created unique video templates for the new Thatpart studio, a Saas product providing video creation for podcasters.",
            "I also implemented an internal tool for pre-generating podcast clips - using NLP python libraries to extract and analyse data from the RSS feeds of podcasts.",
        ],
        link: "https://thatpart.co/",
        icon: <Thatpart />
    },
    {
        title: "Krowd9",
        role: "Software Engineer Intern",
        date: "JUN 2018 - AUG 2018",
        description: [
            "Krowd 9 is a football sports app company providing the latest footballing scores and news.",
            "I shadowed  a lead iOS engineer on the ongoing World cup project for the new upcoming release.",
            "This involved developing new product features using Xcode and Swift - e.g: providing and displaying the new World Cup squads for each match fixture.",
        ],
        link: "http://www.krowd9.com/",
        icon: <Krowd9 />
    },
]