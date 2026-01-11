import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Brain,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent successfully! 🚀");
    setTimeout(() => setFormStatus(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "NepalPlay",
      description:
        "A revolutionary platform for scouting talented players and fostering the development of sports in Nepal. Empowering athletes and building the future of Nepali sports.",
      tech: ["MERN Stack"],
      github: "https://github.com/kcCoder-X/NepalPlay",
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Machine Learning Projects",
      description:
        "A comprehensive collection of ML implementations showcasing expertise in predictive modeling, data analysis, and AI-driven solutions. Exploring the frontiers of artificial intelligence.",
      tech: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      github: "https://github.com/kcCoder-X/Machine_Learning",
      gradient: "from-pink-600 to-orange-600",
    },
  ];

  const skills = [
    {
      name: "Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    { name: "Python", icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "Java", icon: Code2, color: "from-orange-500 to-red-500" },
    { name: "C++", icon: Code2, color: "from-green-500 to-emerald-500" },
    { name: "MySQL", icon: Code2, color: "from-indigo-500 to-purple-500" },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-['Poppins',sans-serif] relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              AK
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all ${
                    activeSection === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-gray-400 hover:text-white transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 mb-6 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl font-bold">
                AK
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Abishek Khadka
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 animate-slide-up animation-delay-200">
            Machine Learning Enthusiast & Software Developer
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            Transforming ideas into intelligent solutions through code and
            innovation
          </p>

          <div className="flex gap-6 justify-center mb-12 animate-slide-up animation-delay-600">
            <a
              href="https://github.com/kcCoder-X"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abishek-khadka-1a1476339/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/abishekkhadka10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 animate-slide-up animation-delay-800"
          >
            View My Work
          </button>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-500" />
                Machine Learning Specialist
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate about artificial intelligence and machine learning,
                I'm dedicated to building intelligent systems that solve
                real-world problems. Currently pursuing my Bachelor's in
                Information Technology while diving deep into ML algorithms,
                neural networks, and data-driven solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Code2 className="w-8 h-8 text-pink-500" />
                Full-Stack Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                With strong foundations in Python, Java, and C++, I craft
                elegant solutions that merge functionality with innovation. I'm
                driven by attention to detail, quick decision-making, and a
                commitment to creating exceptional user experiences through
                technology.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-110 flex flex-col items-center gap-3 group"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold mb-2 text-purple-400">Education</h4>
              <p className="text-sm text-gray-400">
                Bachelor in Information Technology
              </p>
              <p className="text-xs text-gray-500">
                Aryan School of Engineering & Management
              </p>
              <p className="text-xs text-gray-500 mt-1">GPA: 3.45</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold mb-2 text-pink-400">Location</h4>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kathmandu, Nepal
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold mb-2 text-blue-400">Languages</h4>
              <p className="text-sm text-gray-400">English, Nepali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-all`}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105`}
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:kcavi1030@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>kcavi1030@gmail.com</span>
                </a>

                <a
                  href="tel:+9779829373202"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+977 9829373202</span>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Kathmandu, Nagarjun 6, Ramkot</span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://github.com/kcCoder-X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abishek-khadka-1a1476339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/abishekkhadka10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  Send Message
                </button>

                {formStatus && (
                  <p className="text-center text-green-400 animate-fade-in">
                    {formStatus}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Abishek Khadka. Crafted with passion and code.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
