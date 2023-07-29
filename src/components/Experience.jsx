import React, { useState, useEffect, useRef } from "react";
import { Stack,Box } from "@mui/material";
import "./Experience.css"

const Experience = () => {
    const [contentHeight, setContentHeight] = useState("auto");
    const contentRef = useRef(null);
  
    useEffect(() => {
      const updateContentHeight = () => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.offsetHeight + "px");
        }
      };
  
      // Initial height calculation
      updateContentHeight();
  
      // Add event listener for window resize
      window.addEventListener("resize", updateContentHeight);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateContentHeight);
      };
    }, []);
    return(
        <Box class="resume-right-card-container" style={{ height: contentHeight }}>
            <Box class="resume-right-card">
                <Box class="front-content" style={{ height: contentHeight }}>
                    <p>Experience</p>
                </Box>
                <Stack class="content" spacing={2} ref={contentRef}>
                    <h2>Full Stack Software Engineering</h2>
                    <h3>IQVIA - Intern Summer 2022</h3>
                    <p>
                    During my full stack software engineering internship, 
                    I served as a Full Stack Developer on a Scrum team. 
                    I was responsible for working on a Flask application 
                    using Python, which involved managing multiple database 
                    connections. The frontend of the project was built using 
                    the React Library in JavaScript. Throughout this internship, 
                    I gained hands-on experience with various technologies and tools, 
                    including Docker, Kubernetes, and Jenkins. This allowed me to 
                    familiarize myself with DevOps practices and Agile workflows, 
                    further enhancing my understanding of the software development 
                    lifecycle.
                    </p>
                    <h2>Web App Developer</h2>
                    <h3>Bartender.work - Startup Sept 2023-Current</h3>
                    <p>
                    Bartender.work is a full stack web application that originated as 
                    my senior design project and evolved into a passion project. It 
                    serves as a platform where bartenders can secure local gig-work 
                    opportunities. Taking charge of the entire infrastructure setup, 
                    I hosted the website on a dedicated machine connected through my 
                    personal Wi-Fi router. The development and launch involved utilizing 
                    key technologies such as React, Python, SQLite, nginx, and certbot. 
                    Feel free to explore the website at www.bartender.work 
                    (currently unavailable as backend is moved onto cloud server).
                    </p>
                    <h2>Branch Manager</h2>
                    <h3>Vector Marketing - January 2019-December 2020</h3>
                    <p>
                        As Branch manager, I managed all aspects of marketing operations.
                        My responsibilities included Recruiting, Interviewing, Training,
                        and Managing my team of sales representatives out of my office in
                        New London, CT. To make my job more efficent I wrote a Python Bot,
                        I would feed the bot a list of names that I intended on trying to 
                        recruit to my sales team. The bot would then message each person on
                        Facebook using libraries like Selenium. Before I was a Branch Manager,
                        I was an Assistant Manager and Sales Rep with $70,000 in personal sales.
                    </p>
                </Stack>
        </Box>
        </Box>
    );
}
export default Experience;