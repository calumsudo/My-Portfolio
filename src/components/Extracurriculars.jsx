import React, { useState, useEffect, useRef } from "react";
import { Stack,Box } from "@mui/material";
import "./Extracurriculars.css"

const ExtraCurriculars = () => {
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
        <Box class="resume-right-card2-container"  style={{ height: contentHeight }}>
        <Box class="resume-right-card2">
        <Box class="front-content"  style={{ height: contentHeight }}>
            <p>Extracurriculars</p>
        </Box>
        <Stack class="content" spacing={2} ref={contentRef}>
                    <h2>Fraternity President</h2>
                    <h3>ΦΚΣ Epsilon Gamma Chapter - September 2022 - May 2023</h3>
                    <p>
                    As the President of my fraternity, I assumed responsibility for overseeing 
                    the actions of over 70 members. Throughout my tenure, I successfully led weekly 
                    chapter meetings, managed our social media accounts, and organized a diverse 
                    range of events focusing on essential topics such as Diversity, Equity & Inclusion, 
                    Leadership, and Personal Development, among others. In this capacity, I served as 
                    the primary liaison between our chapter's national organization and the school administration.
                    Notably, I spearheaded numerous fundraisers benefiting prominent charitable organizations 
                    like the Leukemia and Lymphoma Society and the Be Positive Foundation, collectively raising 
                    thousands of dollars to support their vital causes. Additionally, I took the initiative to 
                    coordinate community clean-up efforts and actively participated in various community service 
                    projects, dedicating substantial hours to serving the local institutions.
                    Moreover, ensuring the academic excellence of our chapter members was a priority. To achieve 
                    this, I collaborated with my executive committee to establish and manage an annual budget of 
                    nearly $60,000, ensuring responsible allocation of funds for various fraternity activities and 
                    academic support initiatives.
                    In my capacity as President, I endeavored to uphold the values of our fraternity while fostering 
                    an inclusive and supportive environment for all members. This experience has equipped me with 
                    valuable leadership, organizational, and interpersonal skills that continue to shape my personal 
                    and professional growth.
                    </p>
                    <h2>Fraternity Recruitment Chair</h2>
                    <h3>ΦΚΣ Epsilon Gamma Chapter - September 2021 - May 2022</h3>
                    <p>
                    As the Recruitment of my fraternity, I assumed responsibility for overseeing 
                    the recruitment of all new members. In this role I was tasked with setting up
                    an efficient process that would ensure we were able to attract high quality
                    candidates while also maintaining a positive attitude towards diversity in both
                    race, gender identity, ethnic origin, religion or political affiliation.
                    </p>
                    <h2>Fraternity Founding Father</h2>
                    <h3>ΦΚΣ Epsilon Gamma Chapter - February 5, 2022</h3>
                    <p>
                        Bringing this chapter to the University of Delaware was no easy task,
                        myself along with a few others wrote proposals, sat through long meetings
                        with school administration, wrote hundreds of pages of our charter, wrote bylaws,
                        and perservered through it all.
                    </p>
                </Stack>
        </Box>
        </Box>
    );
}
export default ExtraCurriculars;


