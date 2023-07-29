import React, { useState, useEffect, useRef } from "react";
import { Stack,Box } from "@mui/material";
import "./Education.css";

const Education = () => {
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
    return (
        <Box class="resume-left-card-container" style={{ height: contentHeight }}>
            <Box class="resume-left-card">
                <Box class="front-content" style={{ height: contentHeight }}>
                    <p>Education</p>
                </Box>
                    <Stack className="content" spacing={2} ref={contentRef}>
                    <h2>Bachelor of Science in Computer Engineering</h2>
                    <h3>University of Delaware, 2023</h3>
                    <h4>Minors: Computer Science, Cybersecurity</h4>
                    <h4>Relevant Course Work</h4>
                    <p>
                    System Hardening & Protection, Operating Systems, 
                    Computer Systems Design, Random Signals and Noise, 
                    Computer Networks, Pen Test and Reverse Engineering, 
                    Cloud Computing and Security, Data Structures, 
                    Computer Systems Engineering, Analog IC Design, 
                    Electronic Circuit Analysis, Cybersecurity, and
                    Java OOP, Python Basics & Matlab, Microprocessor Systems.
                    </p>
                    <h2>Udemy BootCamps</h2>
                    <h5>The Complete Web Development Bootcamp - Bogdan Stashchuk</h5>
                    <p>
                    I completed The Complete Web Development Bootcamp, gaining expertise 
                    in full-stack web development. I mastered JavaScript, React, Python, 
                    Docker, Flask, and API integration. Through hands-on projects, I built 
                    single-page applications with React components and established seamless 
                    frontend-backend communication using Axios. Additionally, I honed my skills 
                    in designing APIs, utilizing Python Flask for backend development, and implementing 
                    Git for version control. This bootcamp equipped me with a well-rounded toolkit to 
                    create dynamic web applications and manage full-stack development workflows.
                    </p>
                    <h5>Python for Data Science and Machine Learning BootCamp - Jose Portilla</h5>
                    <p>
                    I completed the Python for Data Science and Machine Learning Bootcamp, 
                    gaining proficiency in a wide range of essential data science and machine 
                    learning tools. I learned how to use NumPy and Pandas for efficient data 
                    manipulation and analysis, while Matplotlib and Seaborn enabled me to 
                    create meaningful visualizations. Additionally, I explored Plotly for 
                    interactive dynamic visualizations and implemented machine learning 
                    algorithms using Scikit-Learn. The bootcamp provided valuable insights 
                    into K-Means Clustering, Logistic Regression, Linear Regression, 
                    Random Forests, Decision Trees, Natural Language Processing, and 
                    Neural Networks. Furthermore, I gained expertise in using TensorFlow 
                    for advanced machine learning tasks, making me well-equipped to tackle 
                    data-driven challenges and apply machine learning concepts effectively.
                    </p>
                    <h5>iOS & Swift - The Complete iOS App Development Bootcamp - Dr.Angela Yu</h5>
                    <p>
                    This bootcamp provided me with all the necessary skills to excel in 
                    iOS app development. Throughout the program, I mastered Object-Oriented 
                    Programming, control structures, and learned about software design patterns 
                    like MVC and delegation, laying a strong foundation for my development journey.
                    The bootcamp covered various essential aspects, including networking, making 
                    asynchronous API calls, and utilizing local data storage techniques such as 
                    Core Data and Realm. It didn't stop at the basics; I also explored advanced 
                    topics like In-App Purchases, Machine Learning using CoreML2 and CreateML, and 
                    Augmented Reality with ARKit2. With SwiftUI, I was able to create beautiful and 
                    user-friendly interfaces that seamlessly work across Apple products. As a result, 
                    I now feel well-prepared to develop innovative and sophisticated iOS apps.
                    </p>
                    <h5>Machine Learning, Data Science and Deep Learning with Python</h5>
                    <p className="content-bottom">
                    In this hands-on bootcamp, I mastered Machine Learning, Data Science, and Deep Learning using Python. 
                    Through practical projects, I gained expertise in Neural Networks, TensorFlow, and 
                    Keras. I learned to create synthetic images with VAE's and GAN's, and visualize data with 
                    Matplotlib and Seaborn. The bootcamp covered Transfer Learning, Sentiment Analysis, Image Recognition, 
                    and Regression Analysis for data-driven predictions. I also explored Unsupervised Learning techniques 
                    like K-Means Clustering and Principal Component Analysis, and optimized models with Cross Validation and 
                    Hyperparameter Tuning. Now equipped with these skills, I am a confident and versatile data scientist ready 
                    for real-world challenges.
                    </p>
                    </Stack>

                </Box>
        </Box>
    );
}

export default Education;

