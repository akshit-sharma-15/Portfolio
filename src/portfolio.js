import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Akshit Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: null,
  description: "Computer science student passionate about learning new technologies.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/akshit-sharma-15",
  linkden: "https://www.linkedin.com/in/akshit-sharma-15/",
};

/*=====================
    3. Banner Section
    Desc: Akshit portfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Akshit Sharma",
  bannerHeading: "Developer",
  bannerTagLine: emoji(
    "Computer science student passionate about learning new technologies. 💻"
  ),
  bannerAvatar: "avatar.jpeg",
  resumeLink: "https://docs.google.com/document/d/10q8zuoqGIORs72gr2v0-_MF65tVp2QFs/edit?usp=sharing&ouid=113901776171351104214&rtpof=true&sd=true",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "akshit_sharma@akshit",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "Kalvium’s UG program in CS (Software Product Engineering) (2024-28). B.E(CSE), Chitkara University. I am a computer science student passionate about learning new technologies. In my free time, I enjoy playing table tennis, which has helped me improve focus, patience, and discipline. The game taught me to stay calm under pressure, accept mistakes, and adapt to different opponents’ playing styles.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Proficient in Languages: C++ [Advanced], Java [Intermediate], Python [Intermediate].",
    "Frontend & Backend Development: React.js, Tailwind CSS, Node.js, Express.js.",
    "Databases & Tools: MongoDB, MySQL, PostgreSQL, Docker, Git, Rest APIs.",
  ],

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-java",
    },
    {
      fontAwesomeClassname: "fab fa-git",
    },
    {
      fontAwesomeClassname: "fab fa-github",
    },
    {
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};



/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Ai Study Buddy",
      projectBio:
        "Built an AI study assistant enabling users to upload notes and query them using natural language. Implemented React UI, Node.js backend APIs, and Gemini integration.",
      demoLink: "https://aistudybuddy.netlify.app/",
      repoLink: "https://github.com/kalviumcommunity/S84_Akshit_Capstone_AiStudyBuddy",
      stackList: ["MERN", "Gemini API", "JWT", "Netlify"],
    },
    {
      projectName: "Hummanizer",
      projectBio:
        "Developed an application that refines AI-generated text to improve readability and human-like tone.",
      demoLink: "https://luminous-tapioca-411853.netlify.app/",
      repoLink: "https://github.com/akshit-sharma-15/Hummanizer",
      stackList: ["React 19", "Vite", "Gemini API", "Axios"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: [],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  projectsSection,
  contactSection,
};
