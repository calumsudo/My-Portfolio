import React from "react";
import { Grid, Stack } from "@mui/material";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import ExtraCurriculars from "../../components/Extracurriculars";
import TechnologiesSlider from "../../components/TechnologiesSlider";
import ResumeCard from "../../testing/ResumeCard";

const technologies = [
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/242px-Matlab_Logo.png',
    'https://static.vecteezy.com/system/resources/previews/021/059/827/original/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg',
    'https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
    'https://1000logos.net/wp-content/uploads/2022/07/Kubernetes-Logo.png',
    'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png',
    'https://www.serviops.ca/wp-content/uploads/2015/07/Google-Cloud-Platform-GCP-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
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
    'data:image/png;base64,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',

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
            {/* <TechnologiesSlider images={technologies} speed={2} /> */}
        </div>
    );
}

export default ResumeScreen;