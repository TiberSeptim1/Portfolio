import {
  python,
  c,
  pandas,
  numpy,
  threejs,
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  linkedin,
  twitter,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  arrow,
  contact,
  soundon,
  soundoff,
  instagram
} from "../assets/icons";

export const contacticon = [
  {
    imageUrl: instagram,
    name: "instagram",
    link: 'https://www.instagram.com/tiber.septim1/'
  },
  {
    imageUrl: linkedin,
    name: "Linkedin",
    link: 'https://www.linkedin.com/in/vedant-belurkar-1a9985353/'
  },
  {
    imageUrl: github,
    name: "GitHub",
    link: 'https://github.com/TiberSeptim1'
  }
];

export const skills = [
  {
      imageUrl: css,
      name: "CSS",

  },
  {
      imageUrl: python,
      name: "python",

  },
  {
      imageUrl: git,
      name: "Git",

  },
  {
      imageUrl: github,
      name: "GitHub",

  },
  {
      imageUrl: html,
      name: "HTML",

  },
  {
      imageUrl: javascript,
      name: "JavaScript",
  },
  {
      imageUrl: numpy,
      name: "numpy",

  },
  {
      imageUrl: pandas,
      name: "pandas",

  },
  {
      imageUrl: c,
      name: "C",

  },
  {
      imageUrl: threejs,
      name: "Three.js",

  },
  {
      imageUrl: react,
      name: "React",

  },
  {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",

  }
];

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'CurveCraft',
      desc: 'This project visualizes Rose Curves using Python, Plotly, and Streamlit. Users can interactively explore the curves by selecting between the sine or cosine functions and adjusting the parameter n, allowing for a deeper understanding of how these curves behave in polar coordinates.',
      subdesc:
        'The real-time updates and interactive interface, with radial lines for symmetry, make this an engaging way to explore math. Built with Plotly for dynamic graphs and Streamlit for the front-end, with NumPy for calculations.',
      href: 'https://curvecraft.streamlit.app/',
      texture: '/textures/project/project1.png',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Youtube Video Downloader',
      desc: 'This project is a YouTube video downloader built using yt-dlp and CustomTkinter. It allows users to download videos in different resolutions, such as 1080p, 720p, 480p, and 144p, through a simple graphical interface.',
      subdesc:
        'The app features a progress bar and status updates during the download process. CustomTkinter is used to create a sleek, user-friendly interface with real-time download status and error handling. The download process runs on a separate thread to ensure a smooth experience. yt-dlp handles the downloading of videos, with support for the best video and audio formats.',

      href: 'https://github.com/TiberSeptim1/YoutubeDownloader',
      texture: '/textures/project/project2.png',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Indian Agriculture Crop Analysis',
      desc: 'This project analyzes Indian agricultural data using Pandas, Streamlit, and Plotly to provide insights into crop yields across various states, seasons, and districts. Users can filter the data to recommend the best-performing crops based on yield and visualize trends.',
      subdesc:
        'The app offers interactive filters to select states, seasons, and districts. It displays the top 5 performing crops based on average yield and provides a yearly trend of crop yields. The recommendations are based on yield data, with a user-friendly interface powered by Streamlit. Plotly is used for visualizing crop performance and trends over the years.',
      href: 'https://iaa-by-tiberseptim1.streamlit.app/',
      texture: '/textures/project/project3.png',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Elliptical Sound Simulation',
      desc: 'This project simulates the acoustics of an elliptical stadium using Plotly and Streamlit. It visualizes how sound rays travel from one focus to the other, demonstrating the unique sound behavior in elliptical spaces.',
      subdesc:
        'The app allows users to adjust the major and minor axes of the ellipse and the number of sound rays. It visualizes the elliptical boundary, the foci, sound rays from one focus, and the reflected rays reaching the other focus. Plotly is used to create interactive graphics, offering a clear understanding of elliptical acoustics.',
      href: 'https://elliptical-stadium-sound-simulation-by-tiberseptim1.streamlit.app/',
      texture: '/textures/project/project4.png',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'This Portfolio Website!',
      desc: 'This interactive portfolio website showcases my projects and skills through dynamic, 3D visualizations built with React and Three.js. The website provides an immersive experience with smooth animations and a sleek design, highlighting my work in programming, data science, and AI.',
      subdesc:
        'The site features a custom 3D environment with animations that react to user interactions. React handles the front-end structure and Three.js powers the interactive 3D scenes. It includes sections for projects, programming languages, and links to my GitHub, LinkedIn, and other profiles. The dynamic visuals create an engaging and futuristic design, tailored to represent my skills in modern web development.',
      href: 'https://github.com/TiberSeptim1/Portfolio',
      texture: '/textures/project/project5.png',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];