import React from "react";
import { Grid, Stack, Box } from "@mui/material";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import ExtraCurriculars from "../../components/Extracurriculars";
import TechnologiesSlider from "../../components/TechnologiesSlider";

const technologies = [
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', //Python Logo
    'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', //C 
    'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', //C++
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/242px-Matlab_Logo.png', //MatLab
    'https://freelogopng.com/images/all_img/1681038800chatgpt-logo-black.png', //GPT
    'https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png', // Pi
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', //React
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png', //Node
    'https://1000logos.net/wp-content/uploads/2022/07/Kubernetes-Logo.png', //Kubernettes
    'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png', //
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png', //Firebase
    'https://www.serviops.ca/wp-content/uploads/2015/07/Google-Cloud-Platform-GCP-Logo.png', //GCP
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png', //JS
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png', //html
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png', //
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
    'https://mui.com/static/logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png',
    'https://cdn.worldvectorlogo.com/logos/postman.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1024px-Swift_logo.svg.png',
    'https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png',
    'https://seaborn.pydata.org/_images/logo-tall-lightbg.svg',
    'https://www.vectorlogo.zone/logos/plot_ly/plot_ly-official.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1229px-TensorFlowLogo.svg.png',
    'https://cdn.freebiesupply.com/logos/thumbs/2x/gitlab-logo.png',
    'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png',
    'https://certbot.eff.org/assets/certbot-logo-1A-6d3526936bd519275528105555f03904956c040da2be6ee981ef4777389a4cd2.svg',
    'https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png',
    'https://www.drupal.org/files/Wordmark2_blue_RGB%281%29.png',
    'https://logos-world.net/wp-content/uploads/2021/02/Jira-Emblem.png',

];

const ResumeScreen = () => {

    return(
        <div className="resume-screen">
            <h1 className="resume-screen-title">RESUME</h1>
            <div className="resume-container">
                <Grid container spacing={2} sx={{padding:"20px"}}>
                    <Grid item xs={12} md={6}>
                        <Education />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Experience />
                            <ExtraCurriculars />
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <Box sx={{paddingBottom:"30px"}}><TechnologiesSlider images={technologies} speed={2} /></Box>
            
        </div>
    );
}

export default ResumeScreen;