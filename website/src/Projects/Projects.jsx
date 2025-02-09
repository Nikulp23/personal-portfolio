import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import cartx from "./cartx.png";
import math from "./math1.png";
import hackrpi from "./hackrpi.png";
import glibby from "./glibby.png";
import chat_bing from "./chat_bing.png";
import finance from "./financeHacks.png";
import ecovision from "./ecovision.png";
import { Badge, Group, Title, Text, Container } from "@mantine/core";
import classes from "../Experience/FeaturesCards.module.css";

const cardData = [
  {
    id: 1,
    type: "FINANCE FOR ALL",
    title: "1st Place Hackathon Winner 🏆🏆🏆",
    content:
      "Developed a platform using React and Express JS that simplifies bank comparisons for accounts, credit cards, and loan rates, saving users significant research time. Integrated Google Gemini to create a responsive chatbot, enhancing user experience with financial literacy support.",
    img: finance,
    tags: ["GOOGLE GEMINI", "REACT", "EXPRESS JS", "CSS", "MYSQL"],
    link: "https://github.com/Nikulp23/FinanceHacks",
    alt: "picture",
  },
  {
    id: 2,
    type: "ECO VISION",
    title: "Hack RPI Best AI Hack 🏆🏆🏆",
    content:
      "Created a web app using React and Flask to identify recyclables with 95% accuracy, leveraging AI and OpenCV for image/video analysis. Enhanced waste sorting efficiency by 20% and provided actionable sustainability insights.",
    img: ecovision,
    tags: ["OPEN AI", "REACT", "FLASK", "Python", "OpenCV"],
    link: "https://devpost.com/software/recircle-ot57su",
    alt: "ecovision",
  },
  {
    id: 3,
    type: "CARTX",
    title: "Cost-Optimizing Shopping App 🛍️ 🛒",
    content:
      "CartX Vision revolutionizes shopping by finding the best local deals with a single click. Leveraging a dynamic React frontend and a powerful Node.js backend, it reduces shopping time by up to 30%. Integrated with RESTful APIs and advanced web scraping, CartX provides users with real-time price comparisons across major retailers.",
    img: cartx,
    tags: ["REACT", "EXPRESS JS", "PYTHON", "SELENIUM", "MONGO DB"],
    link: "https://github.com/CartX-RCOS",
    alt: "cartx picture",
  },
  {
    id: 4,
    type: "MATH WHISPERERS",
    title: "Voice-Powered Math Solver with OpenAI and Wolfram Alpha ♿️",
    content:
      "Transforming math accessibility with voice commands, our project empowers visually impaired users to solve equations effortlessly. Advanced speech recognition and NLP deliver intuitive auditory responses, making education more inclusive.",
    img: math,
    tags: ["OPEN AI", "WOLFRAM ALPHA", "VOICE RECOGNITION", "CSS"],
    link: "https://github.com/Nikulp23/math-whisperer",
    alt: "picture",
  },
  
  {
    id: 5,
    type: "OpenAI - Microsoft Bing",
    title: "Image to Web Recognition 🤖 🧠",
    content:
      "Created a cutting-edge feature that harnesses OpenAI’s Vision Model to analyze images and retrieve related web information via Microsoft Bing. This integration utilizes advanced AI trained on 400 million image-text pairs to deliver insightful and relevant search results.",
    img: chat_bing,
    tags: ["OPENAI VISION MODEL", "BING API", "AZURE", "JAVASCRIPT"],
    link: "https://github.com/Nikulp23/Projects/blob/main/Instagram%20Clone/pages/tweet/imageAPI.js",
    alt: "",
  },
  {
    id: 6,
    type: "HACKRPI",
    title: "Enhanced User Navigation: Dynamic Maps Page in React📍",
    content:
      "Developed an interactive maps page using React and CSS for HackRPI's web application, significantly improving user navigation and data interaction for over 600 participants in a hackathon setting.",
    img: hackrpi,
    tags: ["REACT", "BOOTSTRAP", "JAVASCRIPT", "GITHUB", "FIGMA"],
    link: "https://github.com/Nikulp23/HackRPI-Website2023",
    alt: "",
  },
  {
    id: 7,
    type: "GLIBBY",
    title: "High-Performance Computational Geometry Library 🧮",
    content:
      "Developed advanced algorithms for polynomial operations, including addition, subtraction, multiplication, division, and root finding using techniques like the quadratic formula. This enhancement significantly boosts the library's computational capabilities, supporting high-performance calculations for diverse applications.",
    img: glibby,
    tags: ["C++", "CMAKE", "VISUAL STUDIO", "GITHUB", "POWERSHELL"],
    link: "https://github.com/Nikulp23/glibby",
    alt: "",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="xl">
          MY PROJECTS
        </Badge>
      </Group>

      <Title order={1} className={classes.title} ta="center" mt="sm">
        Let's take a look at my projects
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        My career journey showcases a dedication to driving innovative technical
        projects and a commitment to excellence and continuous improvement{" "}
      </Text>

      <div className="container">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id}>
              <article className="card">
                <div className="background">
                  <img src={card.img} alt={card.alt} />
                </div>
                <div className="content">
                  <div className="card-header">
                    <div className="card-type name">{card.type}</div>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="latest-article">View</div>
                    </a>
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">{card.title}</h2>
                    <p>{card.content}</p>
                  </div>
                  <div className="blog-preview__bottom">
                    {card.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="card-type"
                        style={{
                          transitionDelay: `${index * 100}ms`,
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Projects;
