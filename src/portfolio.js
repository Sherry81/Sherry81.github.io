/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shehroze Ali",
  title: "Hi all, I'm Shehroze",
  subTitle: emoji(
    "A Frontend-focused Software Engineer 🚀 with 6+ years of experience building scalable, enterprise-grade web applications using React, TypeScript, Angular, and Node.js. Experienced with SaaS products, AI-integrated platforms, real-time communication systems, and cross-platform mobile development with React Native and Ionic."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wSLYOaqudw9fcih-6hvvO9VjFlQsUJO0/view?usp=sharing", // TODO: replace with a link to Shehroze's own resume file. Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sherry81",
  linkedin: "https://www.linkedin.com/in/shehroze-ali-088505196",
  gmail: "shehrozeali81@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONTEND-FOCUSED SOFTWARE ENGINEER BUILDING SCALABLE, ENTERPRISE-GRADE WEB & MOBILE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build responsive, enterprise-grade web applications with React, TypeScript, and Angular"
    ),
    emoji(
      "⚡ Design and integrate REST APIs with Node.js, Express.js, MongoDB, and Firebase"
    ),
    emoji("⚡ Develop cross-platform mobile apps using React Native and Ionic"),
    emoji(
      "⚡ Apply AI-assisted engineering, prompt engineering, and AI-augmented code review to speed up development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sir Syed University of Engineering and Technology",
      logo: require("./assets/images/ssuetLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "2016 - 2019",
      desc: "Graduated with a CGPA of 3.29, with coursework in Software Engineering, Web Security, Operating Systems, and related areas."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/React & TypeScript", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Node.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile/React Native & Ionic",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Contour Software Pvt Ltd",
      // companylogo: require("./assets/images/contourLogo.png"), // TODO: add this logo image to ./assets/images
      date: "Jul 2023 – Present",
      desc: "Developed and maintained responsive web applications using React, and collaborated with backend teams using Ruby on Rails to build supporting REST APIs.",
      descBullets: [
        "Maintained 5+ React modules across a large-scale enterprise SaaS platform",
        "Reduced legacy code complexity by revamping 3+ modules using modern React standards",
        "Implemented state management with Redux and redux-form to manage form state and improve performance",
        "Leveraged GitHub Copilot for module revamps and code quality improvements",
        "Integrated third-party services/APIs for authentication and authorization",
        "Conducted API testing and documentation using Postman and Swagger"
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "INVIXIBLE PVT LTD",
      // companylogo: require("./assets/images/invixibleLogo.png"), // TODO: add this logo image to ./assets/images
      date: "Dec 2021 – Jul 2023",
      desc: "Led frontend development using ReactJS to enhance UI design and user experience while integrating APIs, working closely with backend developers using Node.js and MongoDB.",
      descBullets: [
        "Reduced state-related bug reports by ~30% by migrating to Redux Toolkit + RTK Query",
        "Implemented new features and addressed bugs within the existing product",
        "Worked on complex forms, socket handling, and user interaction enhancements",
        "Mentored 3 junior developers through weekly knowledge-sharing sessions",
        "Conducted code reviews, pair programming, and documented coding guidelines"
      ]
    },
    {
      role: "MEAN Stack Developer",
      company: "Hulhub Pvt Ltd",
      // companylogo: require("./assets/images/hulhubLogo.png"), // TODO: add this logo image to ./assets/images
      date: "Aug 2021 – Dec 2021",
      desc: "Developed a real-time chat solution connecting agents with customers using the MEAN stack, including a Twilio-based calling feature.",
      descBullets: [
        "Implemented a calling feature using Twilio",
        "Contributed to the development of a ticket management module",
        "Tackled product enhancements, bug fixes, and code reviews"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Avolox Pvt Ltd",
      // companylogo: require("./assets/images/avoloxLogo.png"), // TODO: add this logo image to ./assets/images
      date: "Aug 2020 – Aug 2021",
      desc: "Contributed to ERP products using Angular, focusing on feature implementation and bug resolution.",
      descBullets: [
        "Developed and maintained new modules and improved existing functionality",
        "Implemented calling and chat module functionality",
        "Conducted unit testing and code reviews"
      ]
    },
    {
      role: "Angular Developer",
      company: "Ciphers Lab Pvt Ltd",
      // companylogo: require("./assets/images/ciphersLabLogo.png"), // TODO: add this logo image to ./assets/images
      date: "Dec 2019 – Aug 2020",
      desc: "Contributed to the front-end development of web and mobile applications using Angular and Ionic.",
      descBullets: [
        "Integrated APIs in Ionic and Angular applications",
        "Implemented complex forms and state management",
        "Worked on web sockets, push notifications, and multilingual support"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PERSONAL AND FREELANCE PROJECTS I'VE BUILT",
  projects: [
    {
      // image: require("./assets/images/hiiboLogo.webp"), // TODO: add this logo image to ./assets/images
      projectName: "HiiBo",
      projectDesc:
        "A personal AI assistant making LLM tools accessible to non-technical users, with prompt assistance, memory management, and customizable AI experiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chat.hiibo.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/docflowLogo.webp"), // TODO: add this logo image to ./assets/images
      projectName: "DocFlow",
      projectDesc:
        "A role-based bank document workflow system with a 5-tier approval chain, automatic round-robin routing, an immutable audit trail, and an admin console for user/branch/region management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://docflow-tawny.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true. No achievements listed on the resume yet — add cards above and set to true when ready.
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true. No blogs listed on the resume yet.
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true. No talks listed on the resume yet.
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true. No podcast listed on the resume yet.
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 330 8370903",
  email_address: "shehrozeali81@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false. No Twitter handle listed on the resume.
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
