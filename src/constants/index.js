import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    next,
    mern,
    vanilla,
    leaderboard,
    portfolio,
    threejs,
    harsh,
    rupam,
    vishnu,
    innomatics,
    aws,
    c,
    conda,
    java,
    numpy,
    pandas,
    power,
    python,
    scikit,
    movie,
    personal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "feedbacks",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Data Structures and Algorithm",
      icon: backend,
    },
    {
      title: "Gaming Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "conda",
      icon: conda,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Numpy",
      icon: numpy,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Power",
      icon: power,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Scikit",
      icon: scikit,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "Innomatics Research Lab",
      icon: innomatics,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Real-time Intern Demographic Analysis with Skill Importance Ranking and Fuzzy Matching Implementation",
        "Misconduct Detection in Recovered Chat Data. Examined chat data to find misconduct related to Zoom link sharing,     employing filtering to flag policy violations per Innomatics Research Labs' LIVE session policies.",
        "Developed a web application using Flask for sentiment analysis. The application was subsequently deployed on AWS EC2, incorporating robust access controls to ensure scalability and safeguard data privacy.",
      ],
    },
    {
      title: "Mern Stack Developer",
      company_name: "Technology Adventure Society, IIT Kharagpur",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Developing and maintaining web applications using React.js, Node.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
  
    {
      testimonial:
        "He is a really good person and a successfull upcoming full stack developer. He works really hard and very dedicated towards his work.",
      name: "Rupam Mahato",
      designation: "Student",
      company: "IIT Kharagpur",
      image: rupam,
    },
    {
      testimonial:
        "I was really impressed with his work on the codeforces leaderboard he created within such a less amount of time.",
      name: "Vishnu Kumar",
      designation: "Student",
      company: "IIT Kharagpur",
      image: vishnu,
    },
  ];
  
  const projects = [
    {
      name: "Movie Recommender System",
      description:
        "Implemented Bag of Words algorithm for analyzing user preferences and generating movie suggestions, integrated into a responsive Streamlit web interface for enhanced user interaction.",
      tags: [
        {
          name: "BOW",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/Harsh1629/Movie_Recommender_System",
    },
    {
      name: "3d Portfolio Website",
      description:
        "This is a website that showcases my skills and experience. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
      tags: [
        {
          name: "React-JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind-CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three-JS",
          color: "pink-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://github.com/Harsh1629/Portfolio_2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };