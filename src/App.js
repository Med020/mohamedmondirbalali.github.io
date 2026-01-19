import { Award, ChevronDown, Code, Database, Download, FolderGit2, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Server, Smartphone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Portfolio Data
const portfolioData = {
  personal: {
    name: "Mohamed Mondir Balali",
    title: "Full-Stack Developer & Sports Tech Enthusiast",
    email: "mohamedbalali02@gmail.com",
    phone: "+212 618 866 203",
    linkedin: "https://linkedin.com/in/mondir-balali",
    location: "Settat, Morocco",
    tagline: "Transforming sports through digital innovation and cutting-edge technology",
    about: "Master's student specializing in Digital Transformation and Sports Technologies, with a strong foundation in full-stack development. Passionate about leveraging technology to revolutionize the sports industry, from performance analytics to immersive AR experiences. Proven track record in building robust web and mobile applications using modern frameworks."
  },
  skills: {
    frontend: ["React", "Next.js", "Vue.js", "Angular", "JavaScript", "HTML/CSS", "Flutter", "Tailwind CSS"],
    backend: ["PHP", "Python", "Spring Boot", "Node.js", "SQL"],
    tools: ["Unity", "Git/GitHub", "Postman", "Android Studio", "WordPress", "MS Excel"],
    languages: ["C#", "Dart", "R", "C"],
    soft: ["Team Collaboration", "Adaptability", "Communication", "Punctuality", "Problem Solving"]
  },
  experience: [
    {
      title: "IT Support Volunteer",
      company: "Confederation Africaine de Football (CAF)",
      period: "July 2025",
      type: "Freelance",
      description: "Provided critical technical support during the Women's Africa Cup of Nations, ensuring seamless operations for a continental sporting event.",
      achievements: [
        "Resolved hardware and software issues for tournament operations",
        "Configured network systems for live broadcasting requirements",
        "Supported broadcasting systems during high-stakes matches"
      ]
    },
    {
      title: "Observation Internship",
      company: "Raja Club Athletic",
      period: "July - September 2025",
      type: "Internship",
      description: "Gained insights into the professional environment of a top-tier Moroccan football club.",
      achievements: [
        "Explored digital transformation initiatives in sports management",
        "Observed player performance tracking systems",
        "Understood the integration of technology in professional sports"
      ]
    },
    {
      title: "Angular/Spring Boot Developer",
      company: "Amasoft MAROC",
      period: "July - September 2024",
      type: "Internship",
      description: "Contributed to developing a comprehensive school management web application using modern full-stack technologies.",
      achievements: [
        "Built responsive UI components with Angular framework",
        "Developed RESTful APIs using Spring Boot",
        "Implemented complete school administration features"
      ]
    },
    {
      title: "AR Developer",
      company: "Maghreb Rayonnage",
      period: "March - June 2024",
      type: "Internship",
      description: "Created an innovative augmented reality mobile application for warehouse visualization.",
      achievements: [
        "Developed AR application using Unity and C#",
        "Implemented 3D model projection in real-world environments",
        "Enhanced customer visualization of storage solutions"
      ]
    },
    {
      title: "Full-Stack Developer Assistant",
      company: "Sapilog SARL",
      period: "April - June 2023",
      type: "Final Year Project",
      description: "Led development of AppFerri, a comprehensive product management solution.",
      achievements: [
        "Built mobile catalog app with Flutter and PHP backend",
        "Created admin web dashboard for content management",
        "Delivered end-to-end solution from conception to deployment"
      ]
    }
  ],
  education: [
    {
      degree: "Master's in Digital Transformation & Sports Technologies",
      institution: "Institut des Sciences du Sport",
      location: "Settat, Morocco",
      period: "2024 - 2026",
      description: "Specializing in the intersection of technology and sports performance"
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Faculté des Sciences et Techniques",
      location: "Settat, Morocco",
      period: "2019 - 2023",
      description: "Foundation in software engineering and computer science"
    }
  ],
  projects: [
    {
      name: "FootyMetrics",
      description: "Advanced football performance analytics platform built with Python and Streamlit, providing deep insights into player and team statistics.",
      technologies: ["Python", "Streamlit", "Data Analysis", "Sports Analytics"],
      category: "Sports Tech"
    },
    {
      name: "Back2Play",
      description: "Immersive AR solution for sports rehabilitation, featuring real-time posture feedback and 3D avatar guidance for post-injury recovery exercises.",
      technologies: ["Unity", "MediaPipe", "Python", "AR", "Computer Vision"],
      category: "Health Tech",
      highlight: true
    },
    {
      name: "AppFerri",
      description: "Complete e-commerce solution with mobile product catalog and web-based admin dashboard for inventory management.",
      technologies: ["Flutter", "PHP", "JavaScript", "MySQL"],
      category: "Web/Mobile"
    },
    {
      name: "Statistical Analysis Study",
      description: "Comprehensive statistical research on educational technologies in sports science, applying advanced statistical methods.",
      technologies: ["R", "Statistics", "Chi-Square", "ANOVA", "Data Analysis"],
      category: "Research"
    }
  ],
  certifications: [
    "IBM Full Stack Software Developer",
    "CS50: Introduction to Programming with Python",
    "Responsive Web Design - FreeCodeCamp",
    "Athlete 365: Sports Coaching"
  ],
  organizations: [
    {
      name: "Enactus I2S Settat",
      role: "Vice Team Leader",
      period: "February - June 2025"
    }
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Professional" },
    { name: "English", level: "Professional" }
  ]
};

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return visibleSections;
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-cyan-600">MB</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Mohamed Mondir <span className="text-cyan-600">Balali</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">{portfolioData.personal.title}</p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            {portfolioData.personal.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
            <a 
              href="/cv.pdf" 

              download="Mohamed Mondir BALALI CV.pdf"
              className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-600 hover:text-cyan-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-600" />
        </div>
      </div>
    </section>
  );
};

// About Section
const About = ({ isVisible }) => {
  return (
    <section id="about" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {portfolioData.personal.about}
            </p>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.soft.map(skill => (
                <span key={skill} className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="text-cyan-600" size={20} />
              <span>{portfolioData.personal.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="text-cyan-600" size={20} />
              <span>{portfolioData.personal.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="text-cyan-600" size={20} />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
              {portfolioData.languages.map(lang => (
                <div key={lang.name} className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{lang.name}</span>
                  <span className="text-sm text-gray-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = ({ isVisible }) => {
  const skillCategories = [
    { title: "Frontend", icon: <Code size={24} />, skills: portfolioData.skills.frontend },
    { title: "Backend", icon: <Server size={24} />, skills: portfolioData.skills.backend },
    { title: "Tools & Platforms", icon: <Database size={24} />, skills: portfolioData.skills.tools },
    { title: "Languages", icon: <Smartphone size={24} />, skills: portfolioData.skills.languages }
  ];

  return (
    <section id="skills" data-animate className={`py-20 bg-gradient-to-br from-gray-50 to-cyan-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3 mb-4 text-cyan-600">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = ({ isVisible }) => {
  return (
    <section id="experience" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className={`bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-cyan-600 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-cyan-600 font-semibold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{exp.type}</span>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = ({ isVisible }) => {
  return (
    <section id="education" data-animate className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <GraduationCap className="text-cyan-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-cyan-600 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{edu.description}</p>
              <p className="text-cyan-600 font-semibold">{edu.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Award className="text-cyan-600" size={28} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                <Award className="text-cyan-600" size={20} />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = ({ isVisible }) => {
  return (
    <section id="projects" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className={`bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${project.highlight ? 'border-2 border-cyan-600' : ''} ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
              {project.highlight && (
                <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full mb-3">
                  FEATURED
                </span>
              )}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FolderGit2 className="text-cyan-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{project.category}</span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Mohamed Mondir Balali</p>
            <p className="text-gray-400 text-sm">© 2026 All rights reserved</p>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function Portfolio() {
  const visibleSections = useScrollAnimation();

  return (
    <div className="font-sans">
      <Navigation />
      <Hero />
      <About isVisible={visibleSections.has('about')} />
      <Skills isVisible={visibleSections.has('skills')} />
      <Experience isVisible={visibleSections.has('experience')} />
      <Education isVisible={visibleSections.has('education')} />
      <Projects isVisible={visibleSections.has('projects')} />
      <Contact isVisible={visibleSections.has('contact')} />
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}