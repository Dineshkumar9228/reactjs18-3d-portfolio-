type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Dineshkumar — UI/UX Designer & Web Developer Portfolio",
    fullName: "DINESHKUMAR R",
    email: "dineshjstudio@gmail.com",
  },
  hero: {
    name: "Dineshkumar",
    p: [
      "I developed 3D Portfolio.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What would you like to share?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate UI/UX Designer and Web Developer skilled in creating 
      responsive, user-friendly web interfaces and design systems. I specialize 
      in tools like Figma, Adobe XD, and technologies such as HTML, CSS, 
      JavaScript, and React. My focus is on designing intuitive user experiences 
      and building clean, maintainable front-end code.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
      content: `I've worked as a UI/UX Design Intern at Greensoft Groups, where I 
      designed responsive prototypes and collaborated with developers to bring 
      them to life. Previously, as a Java Intern at Wavtech Solutions, I built 
      backend logic using Core Java and practiced object-oriented programming.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My Work",
      h2: "Projects.",
      content: `Here are a few of my featured projects that showcase my design and 
      development skills:

      • College ERP UI Design – Created intuitive dashboards for Admin, Student, 
      and Faculty portals using Figma components.

      • AP-SSDC Website Redesign – Revamped the Andhra Pradesh Skill Development 
      portal with a mobile-first, accessible design.

      • Online Bike Accessories Management System – Built a full-stack inventory 
      management web app using PHP, MySQL, HTML, and CSS.`,
    },
  },
};
