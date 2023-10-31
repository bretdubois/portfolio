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
    lsea,
    usedcarprediction,
    mychart,
    threejs,
    apple,
    bestbuy,
    cbgent,
    ucsd,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Continuous Learner",
      icon: web,
    },
    {
      title: "Market Research/Active Investment",
      icon: mobile,
    },
    {
      title: "Blockchain/Web3 Enthusiast",
      icon: backend,
    },
    {
      title: "AR/VR Explorer",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "B.S. Cognitive Science - Design/Interaction",
      company_name: "UC San Diego",
      icon: ucsd,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - June 2024",
      points: [
        "Pursuing a rigorous curriculum focused on Cognitive Science and Human-Computer Interaction, blending psychology, computer science, and design principles.",
        "Engaging in hands-on projects, applying theoretical knowledge to real-world problems, designing intuitive user interfaces and optimizing user experiences.",
        "Collaborating with a diverse cohort of students and professors on interdisciplinary projects, enhancing teamwork, communication, and problem-solving skills.",
        "Actively participating in university-led tech and design workshops, constantly updating skillset in alignment with industry trends.",
        "Applying user-centric design principles in academic projects, aiming to create interfaces that are inclusive, accessible, and intuitive."
      ],
    },
    {
      title: "Technical Expert",
      company_name: "Apple",
      icon: apple,
      iconBg: "black",
      date: "Mar 2022 - Aug 2022",
      points: [
        "Assisted customers in deciphering the vast world of Apple tech, ensuring they left with products tailored to their unique needs.",
        "Earned a reputation for excellence with over 300 top ratings from customers, contributing positively to the store's overall performance.",
        "Regularly dived into training sessions, ensuring I was on top of every Apple product update and innovation.",
        "Worked hand-in-hand with multiple teams, refining processes that both sped up workflows and elevated our customer's in-store experience.",
        "Took pride in uplifting my colleagues, fostering a collaborative environment filled with learning and support."
      ],
    },
    {
      title: "Technical Specialist",
      company_name: "Apple",
      icon: apple,
      iconBg: "black",
      date: "Mar 2021 - Mar 2022",
      points: [
        "Was the go-to link between customers and the Genius Bar, ensuring everyone received timely and effective solutions to their tech hiccups.",
        "Harnessed a systematic approach, breaking down tech issues into manageable chunks to find the best solutions.",
        "Maintained meticulous records of customer interactions, ensuring we had a robust knowledge base to lean on for future queries."
      ],
    },
    {
      title: "Sales Specialist",
      company_name: "Apple",
      icon: apple,
      iconBg: "black",
      date: "Nov 2019 - Mar 2021",
      points: [
        "Helped customers find their ideal Apple match, ensuring they felt confident and excited about their purchases.",
        "Engaged genuinely in conversations, understanding the real tech needs behind every query, and guiding customers to the best products for their requirements."
      ],
    },
    {
      title: "IT Support and Mangement Intern",
      company_name: "CBG Enterprises",
      icon: cbgent,
      iconBg: "#E6DEDD",
      date: "May 2019 - August 2019",
      points: [
        "Provided first-level IT support, adeptly addressing and resolving client issues through a ticketing system, reducing downtime and ensuring business continuity.",
        "Established and nurtured client relationships, proactively addressing needs through regular communication channels, both remotely and onsite.",
        "Led hardware installations and maintenance operations onsite, ensuring optimal performance and longevity for client tech infrastructure.",
        "Worked alongside senior consultants to devise and implement technology strategies tailored to the unique needs of small to medium-sized enterprises."
      ],
    },
    {
      title: "Computer Sales Consultant",
      company_name: "Best Buy",
      icon: bestbuy,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - November 2019",
      points: [
        "Consulted with customers to determine specific computing needs, providing informed recommendations tailored to individual requirements.",
        "Maintained up-to-date knowledge on a vast array of technological products and advancements, ensuring accurate advice on potential purchases.",
        "Collaborated with store teams to optimize inventory management and drive sales performance."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Barney White",
      designation: "Store Leader",
      company: "Apple",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "UI/UX Redesign of Epic Systems MyChart Mobile",
      description:
        "Used practical design principles to redesign the Epic systems MyChart mobile application to improve the overall user experience. Due to the scale of the entire application, our group primarily focused on redesigning the appointment scheduling functionality.",
      tags: [
        {
          name: "ux/ui",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "design",
          color: "pink-text-gradient",
        },
      ],
      image: mychart,
      source_code_link: "https://brazen-mandevilla-b2f.notion.site/Redesign-of-Epic-Systems-MyChart-Mobile-App-0e848bbe3b194c87a987c54de3c68ce3?pvs=4",
    },
    {
      name: "Used Car Price Prediction Modeling",
      description:
        "Implemented a variety of models in Python with sklearn/matplotlib/numpy trained on a dataset including used car sales history to predict fair prices based on the most important features of the car.",
      tags: [
        {
          name: "ML",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "sklearn",
          color: "pink-text-gradient",
        },
      ],
      image: usedcarprediction,
      source_code_link: "https://github.com/bretdubois/used_car_price_prediction",
    },
    {
      name: "Solutions for Climate Change",
      description:
        "Created a social and resource platform for local organizations working on climate issues. Allows users to plan and organize events, share ideas, and connect with like-minded individuals.",
      tags: [
        {
          name: "social",
          color: "blue-text-gradient",
        },
        {
          name: "wix",
          color: "green-text-gradient",
        },
        {
          name: "teamwork",
          color: "pink-text-gradient",
        },
      ],
      image: lsea,
      source_code_link: "https://bdubois16.wixsite.com/lsea",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };