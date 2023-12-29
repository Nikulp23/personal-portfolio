import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import cartx from "./cartx.png";
import math from "./math.png";
import hackrpi from "./hackrpi.png";
import glibby from "./glibby.png";
import chat_bing from "./chat_bing.png";
import {Badge,Group,Title,Text,Container} from '@mantine/core';
import classes from '../Experience/FeaturesCards.module.css';

const cardData = [
    {
        id: 1,
        type: "MATH WHISPERERS",
        title: "Voice-Enabled Math Solver: Integrating ChatGPT and Wolfram for Accessible Equation Processing",
        content: "Revolutionizing math accessibility with just 3 keys, our project empowers the visually impaired to solve equations through voice, delivering intuitive auditory responses. Simplicity changes the world.",
        img: math,
        tags: ["WOLFRAM ALPHA", "VOICE RECOGNITION", "OPEN AI"]
    },
    {
        id: 2,
        type: "CARTX",
        title: "Find cheapest products near you in one click!",
        content: "CartX Vision is a dynamic React/JavaScript project aimed at revolutionizing the shopping experience by finding the most cost-effective products in local stores. With its innovative backend, CartX Vision makes API calls and web scrapes local store websites to compare item prices, ensuring users get the best deals available.",
        img: cartx,
        tags: ["REACT", "JAVASCRIPT", "WEBSCRAPING", "GITHUB WORKFLOW", "API"]
    },
    {
        id: 3,
        type: "OPEN AI AND BING API",
        title: "Image to WebSearch Bridge using OPENAI and BING SEARCH ENGINE",
        content: "This innovative tool uses the power of OpenAI's amazing image recognition technology to analyze visual content and extract pertinent details. Leveraging these insights, it seamlessly interfaces with the Bing Search Engine, translating visual data into comprehensive web searches.",
        img: chat_bing,
        tags: ["OPENAI", "BING API", "REACT", "JAVASCRIPT", "AZURE"]
    },
    {
        id: 4,
        type: "HACKRPI",
        title: "Enhanced User Navigation: Dynamic Maps Page in React",
        content: "Developed an interactive maps page using React and CSS for HackRPI's web application, enhancing user navigation and data interaction for over 600 participants in a hackathon setting.",
        img: hackrpi,
        tags: ["FRONTEND", "REACT", "CSS"]
    },
    {
        id: 5,
        type: "GLIBBY",
        title: "High Performance Computational Geometry Library",
        content: " I developed algorithms for polynomial operations, including addition, subtraction, multiplication, division, and root finding using methods like the quadratic formula. This work significantly enhances the library's capabilities in computational geometry, enabling high-performance computations for a wide range of applications.",
        img: glibby,
        tags: ["C++", "CMAKE", "GITHUB"] // Example tags
    }
];

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <Container size="lg" py="xl">
            <Group justify="center">
                
            <Badge variant="filled" size="xl">
                MY PROJECTS
            </Badge>
            </Group>

            <Title order={1} className={classes.title} ta="center" mt="sm">
                Lets take a look at my projects
            </Title>
    
            <Text c='dimmed' className={classes.description} ta="center" mt="md">
            From teaching complex concepts to leading innovative technical projects, my career path is a testament to a commitment to excellence and growth.
            </Text>

            <div className="container">
                <Slider {...settings}>
                    {cardData.map((card) => (
                        <div key={card.id}>
                            <article className="card">
                                <div className='background'>
                                    <img src={card.img} alt="Blog Preview Image" />
                                </div>
                                <div className='content'>
                                    <div className="card-header">
                                        <div className="card-type">{card.type}</div>
                                        <div className="latest-article">View</div>
                                    </div>
                                    <div className="card-content">
                                        <h2>{card.title}</h2>
                                        <p>{card.content}</p>
                                    </div>
                                    <div className="blog-preview__bottom">
                                        {card.tags.map((tag, index) => (
                                            <div key={index} className="card-type">{tag}</div>
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