import Globe from "./img/globe.png";
import Mobile from "./img/mobile.png";
import Chat from "./img/chat.png";
import Meet from "./img/meet-app.png";
import MovieApi from "./img/movie-api.png";
import MyFlixReact from "./img/myFlix-app.png";
import MyFlixAngular from "./img/myFlix-Angular.png";
import Pokeball from "./img/pokeball.jpg";
import Pokemon from "./img/pokemon-app.png";
import MoviePic from "./img/moviepic.jpg";
import MoviePic2 from "./img/moviepic2.jpg";
import Meetup from "./img/meetup.jpg";
import Texting from "./img/texting.jpg";
import MoviePic3 from "./img/moviepic3.jpg";

import ChatCaseStudy from "./assets/chat-app-case-study.pdf"

export const featuredProjects = [
    {
        id: 1,
        title: "Pokemon App",
        img: Pokeball,
        desc: "This is a Pokedex application that fetches data using an external api, PokeApi. The application is built with HTML, CSS, JavaScript, jQuery, and Bootstrap. Users can click on a Pokemon to learn more information about them and search for specific Pokemon by name.",
        icon: Globe,
        demo: "https://bfab11.github.io/Pokedex-App/",
        caseStudy: ChatCaseStudy
    },
    {
        id: 2,
        title: "Movie-Api",
        img: MoviePic,
        desc: "API Backend for myFlix React and myFlix Angular. This movie API can be used to access a list of movie details, like Movie Title, Movie Genre, Director, and Movie Description. Was built with JavaScript, MongoDB, Express, and deployed with Heroku.",
        icon: Globe,
        demo: "https://github.com/bfab11/movie_api",
        caseStudy: ChatCaseStudy
    },
    {
        id: 3,
        title: "myFlix-React",
        img: MoviePic2,
        desc: "A movie database application built with React which utilizes the Movie-Api server-side application under the Back-End projects. Users here can register an account, edit their profile, view the list of movies, click on a movie to learn more information, and add a movie to their list of favorites.",
        icon: Globe,
        demo: "https://bfab11.github.io/myFlix-client/",
        caseStudy: ChatCaseStudy
    },
    {
        id: 4,
        title: "myFlix-Angular",
        img: MoviePic3,
        desc: "A movie database application built with Angular which utilizes the Movie-Api server-side application under the Back-End projects. Users here can register an account, edit their profile, view the list of movies, click on a movie to learn more information, and add a movie to their list of favorites.",
        icon: Globe,
        demo: "https://bfab11.github.io/myFlix-Angular-client/welcome",
        caseStudy: ChatCaseStudy
    },
    {
        id: 5,
        title: "Meet",
        img: Meetup,
        desc: "A serverless, progressive web application (PWA) built with React using a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events. Users can view events and filter their list by number of events and specific city.",
        icon: Globe,
        demo: "https://bfab11.github.io/meet/",
        caseStudy: ChatCaseStudy
    },
    {
        id: 6,
        title: "Chat",
        img: Texting,
        desc: "A mobile chatting app built with React-Native and Expo. Users can join a chat room with their name and a color to choose for their background bubble and start chatting with others. Users can share their location, send multi-media, and view message history in offline mode.",
        icon: Mobile,
        demo: "https://github.com/bfab11/chat-app",
        caseStudy: ChatCaseStudy
    }
]

export const webProjects = [
    {
        id: 1,
        title: "Pokemon App",
        img: Pokemon,
        desc: "This is a Pokedex application that fetches data using an external api, PokeApi. The application is built with HTML, CSS, JavaScript, jQuery, and Bootstrap. Users can click on a Pokemon to learn more information about them and search for specific Pokemon by name.",
        icon: Globe,
        demo: "https://bfab11.github.io/Pokedex-App/",
        caseStudy: "assets/chat-app-case-study.pdf"
    },
    {
        id: 3,
        title: "myFlix-React",
        img: MyFlixReact,
        desc: "Here is a bunch of dummy text that we will use for now.",
        icon: Globe,
        demo: "https://bfab11.github.io/myFlix-client/",
        caseStudy: "assets/chat-app-case-study.pdf"
    },
    {
        id: 4,
        title: "myFlix-Angular",
        img: MyFlixAngular,
        desc: "Here is a bunch of dummy text that we will use for now.",
        icon: Globe,
        demo: "https://bfab11.github.io/myFlix-Angular-client/welcome",
        caseStudy: "assets/chat-app-case-study.pdf"
    },
    {
        id: 5,
        title: "Meet",
        img: Meet,
        desc: "Here is a bunch of dummy text that we will use for now.",
        icon: Globe,
        demo: "https://bfab11.github.io/meet/",
        caseStudy: "assets/chat-app-case-study.pdf"
    }
]

export const mobileProjects = [
    {
        id: 6,
        title: "Chat",
        img: Chat,
        desc: "Here is a bunch of dummy text that we will use for now.",
        icon: Mobile,
        demo: "https://github.com/bfab11/chat-app",
        caseStudy: "assets/chat-app-case-study.pdf"
    }
]

export const backendProjects = [
    {
        id: 2,
        title: "Movie-Api",
        img: MovieApi,
        desc: "API Backend for myFlix React and myFlix Angular. This movie API can be used to access a list of movie details, like Movie Title, Movie Genre, Director, and Movie Description. Was built with JavaScript, MongoDB, Express, and deployed with Heroku.",
        icon: Globe,
        demo: "https://github.com/bfab11/movie_api",
        caseStudy: "assets/chat-app-case-study.pdf"
    }
]

