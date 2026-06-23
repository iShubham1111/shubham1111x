import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import StackMarquee from "./components/StackMarquee/StackMarquee";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const projectItems = [
  {
    name: "Techno Brainz",
    url: "https://technobrainz.in/",
    period: "Featured Project",
    type: "Business Website",
    summary:
      "A premium service-led website positioned as the lead showcase project, focused on polished presentation, strong structure, and conversion-ready clarity.",
    tone: "purple",
  },
  {
    name: "KartBharo",
    url: "https://kartbharo.com/",
    period: "June 2026",
    type: "Ecommerce Website",
    summary:
      "Built using a fully custom Bootstrap theme with PHP, JavaScript, and WordPress. Focused on ecommerce experience, product presentation, performance, and responsive shopping flows.",
    tone: "teal",
  },
  {
    name: "Technocrat United",
    url: "https://technocratunited.com/",
    period: "Client Website",
    type: "WordPress + Bootstrap Theme + PHP",
    summary:
      "Delivered a clean professional website using WordPress, Bootstrap theming, and PHP customization for a polished business presence.",
    tone: "teal",
  },
  {
    name: "My X Factor",
    url: "https://myxfactor.in/",
    period: "June 2026",
    type: "Brand Accessories Ecommerce Website",
    summary:
      "Built using a custom Bootstrap theme with PHP, JavaScript, and WordPress integration. Designed for mobile accessories, laptop accessories, electronics products, and modern ecommerce presentation.",
    tone: "purple",
  },
  {
    name: "Sarokar India",
    url: "https://sarokarindia.in/",
    period: "May 2026",
    type: "News Website",
    summary:
      "Developed using WordPress, PHP, JavaScript, and a custom Bootstrap-based theme. Includes news publishing workflows, category-based content structure, and scalable editorial management.",
    tone: "neutral",
  },
  {
    name: "TBX Academy - Multi-Page Website",
    url: "https://tbxacademy.in/tbx-home/",
    period: "Jan 2026 - Mar 2026",
    type: "WordPress - Frontend",
    summary:
      "Developed a multi-page educational platform covering Home, About, Career, Projects, and Ecosystem experiences with structured layouts and responsive navigation.",
    tone: "teal",
  },
  {
    name: "TBX Academy - Sales Funnel Website",
    url: "https://tbxacademy.in/",
    period: "Dec 2025 - Jan 2026",
    type: "WordPress - Conversion Design",
    summary:
      "Built a focused sales funnel with clear content sequencing, sharp call-to-action placement, and responsive sections designed to improve conversions.",
    tone: "purple",
  },
  {
    name: "Delhi Bulletin Daily",
    url: "https://delhibulletindaily.com/",
    period: "News Platform",
    type: "WordPress News/Magazine Website",
    summary:
      "Created a WordPress news and magazine website with organized content sections, readable article layouts, and a responsive publishing experience.",
    tone: "neutral",
  },
  {
    name: "GrowByte - Digital Marketing Website",
    url: "https://growbyte.in/",
    period: "Jan 2026 - Feb 2026",
    type: "WordPress - Business Website",
    summary:
      "Designed and developed a modern marketing website centered on AI services, polished visual hierarchy, and responsive page structure.",
    tone: "teal",
  },
  {
    name: "Faizanwer - Professional Portfolio Website",
    url: "https://faizanwer.com/",
    period: "Apr 2026 - Present",
    type: "Portfolio - In Progress",
    summary:
      "Developing a conversion-oriented personal brand website tailored for AI education, professional positioning, and digital transformation storytelling.",
    tone: "teal",
  },
  {
    name: "MeriDelhi - Content/Article Website",
    url: "https://meridelhi.in/",
    period: "Feb 2026",
    type: "WordPress - Editorial Platform",
    summary:
      "Created a content-first website with a cleaner reading experience, stronger information structure, and improved readability across devices.",
    tone: "neutral",
  },
  {
    name: "Hasan Associate - Law Firm Website",
    url: "https://hasanassociate.in/",
    period: "Feb 2026",
    type: "WordPress - Professional Services",
    summary:
      "Built a trust-focused law firm website with concise messaging, refined sections, and a clearer path to important service information.",
    tone: "purple",
  },
  {
    name: "My First Portfolio Website",
    url: "https://ishubham1111.github.io/myportfolio/",
    period: "Mar 2025",
    type: "Portfolio - Frontend",
    summary:
      "Designed and launched an earlier portfolio website to present my frontend skills, design direction, and project selection.",
    tone: "neutral",
  },
  {
    name: "SK Movie - React Movie Website",
    url: "https://skmovie-web.netlify.app/",
    period: "Sep 2024 - Oct 2024",
    type: "React - API Integration",
    summary:
      "Built a movie browsing experience in React and Vite with API-driven content, dynamic layouts, and responsive browsing flows.",
    tone: "purple",
  },
  {
    name: "ShubhamCart11 - E-commerce Website",
    url: "https://shubhamcart11.netlify.app/",
    period: "Aug 2024 - Sep 2024",
    type: "HTML - CSS - JavaScript",
    summary:
      "Created a foundational e-commerce project focused on product layouts, interactive shopping flows, and core frontend implementation.",
    tone: "teal",
  },
  {
    name: "PlantZone - Frontend Project",
    url: "https://plantzone11.netlify.app/",
    period: "Apr 2024 - May 2024",
    type: "Frontend - Beginner Project",
    summary:
      "An early frontend build focused on layout fundamentals, visual styling, and practical hands-on implementation of core web skills.",
    tone: "purple",
  },
];

const timelineItems = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Began learning the fundamentals of frontend development, layout building, and responsive design.",
  },
  {
    year: "2024 - 2025",
    title: "Full Stack Training",
    description:
      "Expanded into backend concepts, project structure, databases, and more complete website workflows.",
  },
  {
    year: "2025 - Present",
    title: "WordPress Internship",
    description:
      "Working on real-world websites, funnels, and content platforms with a growing focus on clean UI and performance.",
  },
  {
    year: "Future",
    title: "Frontend/Backend + WordPress Expert",
    description:
      "Sharpening design execution, frontend craftsmanship, and scalable WordPress delivery for premium web experiences.",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navTheme, setNavTheme] = useState("dark");

  const visibleSections = useMemo(
    () => ["hero", ...navLinks.map((link) => link.id)],
    []
  );

  useEffect(() => {
    const sections = visibleSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const handleScroll = () => {
      const probeOffset = window.innerWidth <= 992 ? 84 : 96;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeOffset && rect.bottom >= probeOffset) {
          currentSection = section;
        }
      });

      if (!currentSection) {
        return;
      }

      setActiveSection(currentSection.id);
      setNavTheme(currentSection.dataset.navTheme || "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [visibleSections]);

  useEffect(() => {
    const revealNodes = document.querySelectorAll("[data-reveal]");
    if (!revealNodes.length) {
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar links={navLinks} activeSection={activeSection} theme={navTheme} />
      <main>
        <Hero />
        <StackMarquee />
        <About />
        <Skills />
        <Education />
        <Projects items={projectItems} />
        <Timeline items={timelineItems} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
