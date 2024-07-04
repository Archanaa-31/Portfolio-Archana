/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg3.jpg";

const imageAltText = "background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Game development using ReactJs",
    description:
    "Considering Rat in a maze game to showcase my skills in front-end development and algorithmic problem-solving. This project involved implementing backtracking algorithms. By combining these elements, I demonstrated proficiency in creating web applications " ,


  },
  {
    title: "Local Adaptive Image Equalization",
    description:
     " The main aim was to improve image quality using techniques like CLAHE. creating a user-friendly interface with HTML and CSS for easy image uploads and displaying results, while Python handled the backend resulting in clearer and detailed images." ,
  
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages.I created a digital version of my resume using HTML and CSS, showcasing my web development skills  The resume features a clean and optimal viewing experience on various devices.",
    url: "https://github.com/Archanaa-31/ResumeArchana",
  },
  {
    title: "Digital ID's Using Blockchain",
    description:
      "Digital IDs using blockchain technology offer a robust, secure approach to identity management. By leveraging the strengths of blockchain digital IDs can transform the way identities are verified and managed across various sectors..",
 
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", paddingTop: "0%" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
