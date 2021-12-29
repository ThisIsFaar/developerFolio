/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thisisfaar",
  title: "Hi all, I'm Farhan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

//resume link
//https://drive.google.com/file/d/1zZUZSd_l3WWpNkqc1_VQUTsNksvZFD7W/view?usp=sharing

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thisisfaar",
  linkedin: "https://www.linkedin.com/in/thisisfaar/",
  gmail: "farhanmohammad2023@gmail.com",
  twitter: "https://www.twitter.com/thisisfaar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Integration of third party services/API's")
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/ggsipu.png"),
      subHeader: "Bachelors of Technology in Information Technology",
      duration: "2020 - present"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Ambedkar Institute Of Technology",
      logo: require("./assets/images/ait.jpeg"),
      subHeader:
        "Diploma in Information Technology Enabled Services & Management",
      duration: "2016 - 2019"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Heateor",
      companylogo: require("./assets/images/heateor.jpeg"),
      date: "Aug 2019 – Feb-2020",
      desc: "Joined as an intern, got full time offer",
      descBullets: [
        "Maintain dozens of products, used by 100k+ users.",
        "Launch premium products.",
        "Worked on web projects"
      ]
    },
    {
      role: "Developer Trainee",
      company: "Codec Networks",
      companylogo: require("./assets/images/codec.png"),
      date: "Jan 2019 – May 2019",
      desc: "Started as a developer trainee, introduced to scripting with Python,Data Analyst - Artificial intelligence( Machine learning )"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/spiffy.png"),
      projectName: "Spiffy-Shirts",
      projectDesc: "E-commerce Store where user can buy shirts/appearels",
      footerLink: [
        {
          name: "Check Live",
          url: "https://spiffy-shirts-h.herokuapp.com/"
        },
        {
          name: "Github Code",
          url: "https://github.com/ThisIsFaar/spiffy-shirts"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/movily.jpeg"),
      projectName: "Movily",
      projectDesc: "Movie DataBase web-app made with ReactJS",
      footerLink: [
        {
          name: "Visit Live",
          url: "https://movily-h.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/ThisIsFaar/movily"
        }
      ]
    },
    {
      image: require("./assets/images/cutchallanss.png"),
      projectName: "Cut-A-Challan",
      projectDesc: "A RPG simple game made with vanilla JS",
      footerLink: [
        {
          name: "Visit Live",
          url: "https://cut-a-challan.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/ThisIsFaar/cut-a-challan"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Full Stack MERN",
      subtitle: "Certified MERN Stack developer from LearnCodeOnline",
      image: require("./assets/images/lco.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/10OvuFS1uLzZW-ijGbxTjGTrVaVhXj3wg/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Linux Traning",
      subtitle: "Certified Linux Trainee from IIT Bombay(Spoken Tutorial) ",
      image: require("./assets/images/st.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1S8-KTzHRe2nJi8iT3NwP61Y4YAN730G0/view?usp=sharing"
        }
      ]
    },

    {
      title: "Javascript Ultimate",
      subtitle:
        "Completed Certifcation from Udemy for Javascript ultimate course",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1HscsEitMZJShgZXhB3JDStsIEKG-4-ie/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+918929814477",
  email_address: "farhanmohammad2023@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
