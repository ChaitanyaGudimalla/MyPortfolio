/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Chaytu's Portfolio",
  description:
    "A dedicated and forward-thinking individual committed to creating impactful solutions. I am passionate about working on projects that contribute to the development of sustainable and scalable social and technical systems, aiming to make a positive difference in the world.",
  og: {
    title: "Chaitanya Gudimalla Portfolio",
    type: "website",
    url: "https://chaitanyagudimalla.github.io/MyPortfolio/home",
  },
};

//Home Page
const greeting = {
  title: "Chaitanya Gudimalla",
  logo_name: "ChaitanyaGudimalla",
  nickname: "QueryQueen",
  subTitle:
    "A dedicated and forward-thinking individual committed to creating impactful solutions. I am passionate about working on projects that contribute to the development of sustainable and scalable social and technical systems, aiming to make a positive difference in the world.",
  resumeLink:
    "https://docs.google.com/document/d/1amv-tUyjmOtwX4D3sy9rOjvBQ1we30mo/edit?usp=drive_link&ouid=114520522104835912108&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/ChaitanyaGudimalla/MyPorfolio",
  githubProfile: "https://github.com/ChaitanyaGudimalla",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ChaitanyaGudimalla",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chaitanya-gudimalla/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@Chaitu491",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:chaytu1997@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/chaytu__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics Intern",
      fileName: "DataAnalyst",
      skills: [
        "⚡ Led complex data analysis using Apache Superset & Trino, leveraging strong analytical & quantitative skills to extract actionable insights for stakeholders",
        "⚡ Collaborated on Data & Analytics process optimization, resulting in 90% efficiency gains and enhanced data integrity through standardized workflows",
        "⚡ Championed data accuracy across platforms, implementing corrective measures and meticulous data hygiene practices to ensure data integrity",
      ],
      softwareSkills: [
        {
          skillName: "Apache Superset",
          fontAwesomeClassname: "simple-icons:apachesuperset",
          style: {
            backgroundColor: "white",
            color: "#FF4500",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "devicon:apachekafka-wordmark",
          style: {
            backgroundColor: "white",
            color: "#FF4500",
          },
        },
        {
          skillName: "Trino",
          fontAwesomeClassname: "simple-icons:trino",
          style: {
            backgroundColor: "transparent",
            color: "#00008B",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "Oracle ERP Financials",
      fileName: "OracleErpImg",
      skills: [
        "⚡ Spearheaded the implementation of Oracle R12 Finance Modules (AR, AP, OM, GL) across APAC, EMEA, and NALA regions.",
        "⚡ Proficient in R12, with strong financial and accounting knowledge for optimized processes.",
        "⚡ Managed complex systems, bridged backend systems with user-friendly interfaces, and optimized database performance through SQL querying.",
        "⚡ Established a central invoice repository, ensured accurate reconciliations, and provided exceptional customer support for AR, AP, and OM inquiries.",
      ],
      softwareSkills: [
        {
          skillName: "Oracle ERP R12",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            backgroundColor: "white",
            color: "#FF4500",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            backgroundColor: "transparent",
            color: "#00008B",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
        {
          skillName: "Microsoft word",
          fontAwesomeClassname: "file-icons:microsoft-word",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/QueryQueen/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/chaytu1997",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/queryqueen",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "G Narayanamma Institute of Technology and Science",
      subtitle: "B.Tech. in Information Technology(Computer Science)",
      logo_path: "gnits_logo.png",
      alt_name: "GNITS Hyderabad",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Aced core software engineering concepts in Data Structures & Algorithms, Object-Oriented Programming (Java), Cloud Computing, and Operating Systems.",
        "⚡ Delved deeper with additional courses in Machine Learning, Artificial Intelligence, Cloud Computing, and Full Stack Development to broaden my skillset",
        "⚡ Tackled challenging concepts in Data Structures & Algorithms, Object-Oriented Programming (Java), Cloud Computing, and Operating Systems which equipped me to excel in technical projects and coursework.",
      ],
      website_link: "https://www.gnits.ac.in/",
    },
    {
      title: "University of Central Florida",
      subtitle: "M.S. in Computer Science",
      logo_path: "ucf_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Delved into Explainable AI, Machine Learning, Computer Vision, and more through diverse coursework.",
        "⚡ Demonstrated strong communication and interpersonal skills by conducting regular office hours, clarifying complex concepts like My SQL and Tableau, and actively contributing to student success through grading assignments and providing constructive feedback.",
        "⚡ Leveraged software engineering principles by building personal projects and contributing to open-source initiatives, utilizing Git for version control and Kanban boards for agile development.",
      ],
      website_link: "https://www.ucf.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Bridging the gap between data and insights, I leverage my analytical expertise and industry experience to unlock valuable business knowledge. As a Data Analyst at Conseqta Technology, I optimized financial operations and ensured data accuracy.  Now, I'm eager to translate my skills into actionable solutions for your organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "University of Central Florida",
          company_url: "https://www.ucf.edu/",
          logo_path: "ucf_logo.png",
          duration: "Jan 2023 - May 2024",
          location: "Orlando, FL, USA",
          description:
            "Fostered a supportive learning environment by conducting regular office hours, providing personalized assistance, and grading assignments in SQL and Tableau. Collaborated with professors to develop course materials, ensuring academic success through effective communication and professionalism.",
          color: "#0879bf",
        },
        {
          title: "Oracle Techno-Functional Consultant",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "Jul 2019 - Aug 2022",
          location: "Chennai, TN, India",
          description:
            "Optimized Oracle O2C and P2P processes, managed financial operations, and provided support for AR, AP, and OM modules, leveraging SQL and ERP R12 expertise. Ensured seamless transitions during system upgrades and maintained high accuracy in month-end reconciliations and financial reporting.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analytics Intern",
          company: "Conseqta Technology",
          company_url: "https://www.conseqta.com/",
          logo_path: "conseqta_logo.png",
          duration: "Jun 2022 - Aug 2022",
          location: "Virgina, USA",
          description:
            "Led data analytics initiatives, driving process improvements and innovative solutions within the Data & Analytics group. Spearheaded prototyping of new models and conducted exploratory data analysis to stay ahead of industry trends. Utilized statistical techniques to ensure data integrity and reliability across multiple projects. Proactively researched and evaluated emerging modeling techniques to enhance overall effectiveness.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Board of Director",
          company: "Rotaract Club of GNITS",
          company_url: "https://www.rotary.org/en",
          logo_path: "rotary_logo.png",
          duration: "Aug 2017 - May 2018",
          location: "Hyderabad, Telangana",
          description:
            "Led strategic initiatives and collaborated with club members to organize community events, including Swachh Bharath and Self Defense campaigns, fostering social impact and community engagement.",
          color: "#4285F4",
        },
        {
          title: "Oracle Student Ambassador",
          company: "Oracle",
          company_url: "https://www.oracle.com",
          logo_path: "oracle_logo.png",
          duration: "Jan 2018 - May 2018",
          location: "Hyderabad, Telangana",
          description:
            "The Oracle Student Ambassador program engages university students in learning and utilizing Oracle's cloud and database technologies. In my role as an Oracle Student Ambassador, I organized training sessions and seminars on Oracle Cloud Infrastructure, database management, and application development. I provided technical guidance and support to students working on projects involving Oracle technologies, helping them leverage cloud solutions for better scalability and performance. My efforts focused on promoting Oracle's tools and fostering a deeper understanding of enterprise-grade software solutions among the student community.",
          color: "#0C9D58",
        },
        {
          title: "Google Developer Student Club",
          company: "Google",
          company_url: "https://www.google.com/index.html",
          logo_path: "google_logo.png",
          duration: "Jun 2018 - Dec 2018",
          location: "Hyderabad, Telangana",
          description:
            "Google Developer Student Clubs are university-based community groups for students interested in Google developer technologies. As a Lead Organizer, I coordinated various events and workshops focused on Google Cloud Platform (GCP) and its applications. I facilitated hands-on coding sessions, hackathons, and seminars to enhance students' understanding of cloud computing, machine learning, and mobile development. Through these activities, I aimed to bridge the gap between academic learning and practical industry skills, fostering a community of innovation and collaboration.",
          color: "#D83B01",
        },
        {
          title: "Amazon Web Services (AWS) Educate Program",
          company: "Amazon",
          company_url: "https://www.amazon.com/",
          logo_path: "amazon_logo.png",
          duration: "Jan 2019 - May 2019",
          location: "Hyderabad, Telangana",
          description:
            "The AWS Educate Program provides resources for students and educators to gain hands-on experience with cloud technology. As an AWS Educate Student Ambassador, I organized and conducted workshops and webinars on AWS services and cloud computing fundamentals. I mentored peers in building and deploying cloud-based projects, promoting the adoption of cloud technology in academic and startup environments. My role involved creating and sharing educational content, guiding students through AWS certification paths, and connecting them with industry professionals.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In the realm of innovation and technology, my journey has been marked by transformative projects that showcase my growth as a developer and problem solver. From the genesis of ideas aimed at solving common user problems to the creation of functional and user-friendly platforms using cutting-edge technologies, each project has been a testament to my dedication and technical prowess. Bridging complex backend systems with seamless user experiences, I have tackled technical challenges head-on, delivering robust and reliable solutions. Delving into data analysis, I transformed raw data into actionable insights, demonstrating the power of well-interpreted information. My work reflects a commitment to excellence and a passion for driving impactful innovation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "chaytus_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Oviedo, FL, USA 32765",
    locality: "Oviedo",
    country: "USA",
    region: "Florida",
    postalCode: "32765",
    streetAddress: "Cortona CV",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/1ApDrCdUqdi9Jdvg6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
