
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Trophy, GraduationCap, Briefcase, Star, ExternalLink, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    languages: ['C', 'C++', 'Python', 'HTML5', 'CSS', 'JavaScript'],
    frameworks: ['Flask', 'FastAPI', 'Streamlit', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    databases: ['MySQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Kaggle'],
    concepts: ['Data Structures & Algorithms', 'OOP', 'Machine Learning', 'Deep Learning'],
    soft: ['Problem-Solving', 'Communication', 'Collaboration', 'Time Management', 'Adaptability']
  };

  const projects = [
    {
      title: 'Real-Time Speech Translator',
      description: 'Real-time multilingual speech-to-speech translation using Google Generative AI. Achieved low latency and integrated TTS output with MP3 download.',
      tech: ['Gemini', 'SpeechRecognition', 'Streamlit', 'Google TTS'],
      github: 'https://github.com/rahul-1809'
    },
    {
      title: 'Automated College Placement Portal',
      description: 'Role-based platform for job posting, applications, and interview scheduling with real-time updates.',
      tech: ['Flask', 'SQLite3', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rahul-1809'
    },
    {
      title: 'Toxic Comment Detection',
      description: 'BiLSTM-based model for multi-label toxicity detection with a Gradio interface for real-time predictions.',
      tech: ['TensorFlow', 'BiLSTM', 'Gradio'],
      github: 'https://github.com/rahul-1809'
    }
  ];

  const education = [
    {
      institution: 'GMR Institute of Technology, Rajam',
      degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
      period: 'Nov 2022 – Apr 2026',
      grade: 'GPA: 9.1'
    },
    {
      institution: 'Sri Viswa Junior College, Visakhapatnam',
      degree: 'Intermediate in Mathematics, Physics, Chemistry (MPC)',
      period: 'Jun 2020 – Apr 2022',
      grade: '96.8%'
    },
    {
      institution: 'Srujana Vidyalaya, SSC Board',
      degree: 'Secondary School Certificate (SSC)',
      period: '2020',
      grade: 'CGPA: 9.82'
    }
  ];

  const achievements = [
    '🏆 1st Place – DataCraze (Stepcone): Data mining and predictive modeling (50+ participants)',
    '🥇 1st Place – DataViz (Stepcone 2024): Visual storytelling and insights'
  ];

  const certifications = [
    'Complete Data Science, ML, DL, NLP Bootcamp (Udemy, 2024)',
    'Deep Learning (NPTEL, IIT Ropar, 2024) – 92%, top 1%',
    'Data Analysis with Python (freeCodeCamp, 2024)',
    'Python Preparatory (Intellipaat, 2024)'
  ];

  const internships = [
    {
      title: 'Edunet Foundation AICTE Internship',
      period: 'Apr–May 2025',
      description: 'Built a movie recommendation system using cosine similarity and metadata. Streamlit-based UI, OMDb API integration.'
    },
    {
      title: 'TechSaksham Internship (Microsoft, SAP)',
      period: 'Feb–Mar 2025',
      description: 'Developed an osteoporosis prediction tool using XGBoost and Streamlit. Achieved 91.1% F1-score. Healthcare AI exposure.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Patnala Rahul</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Patnala Rahul"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Patnala Rahul
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 mb-6">
                AI/ML Enthusiast | B.Tech CSE (AI & ML) | Aspiring Innovator
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I'm a B.Tech CSE (AI & ML) student passionate about building intelligent systems that solve real-world problems. 
                With hands-on experience in AI-powered projects and internships, I aim to bring impactful ideas to life using data and code.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          
          {/* Education Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{edu.institution}</h4>
                        <p className="text-blue-600 font-medium">{edu.degree}</p>
                        <p className="text-gray-600">{edu.period}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
              Internships
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {internships.map((internship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{internship.title}</CardTitle>
                    <CardDescription>{internship.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{internship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Career Aspiration:</strong> Seeking AI/ML-focused roles to contribute to intelligent system development and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="capitalize text-lg">
                    {category === 'soft' ? 'Soft Skills' : category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center">
            <Trophy className="mr-3 h-8 w-8 text-yellow-600" />
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-gray-900">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Leadership & Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">CSI Student Chapter Coordinator</h4>
                  <p className="text-gray-600 mb-2">2023–Present</p>
                  <p className="text-gray-700">Organized 10+ tech workshops and contests</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Community Teaching Volunteer</h4>
                  <p className="text-gray-600 mb-2">2024</p>
                  <p className="text-gray-700">Taught Python to ZPHS students, encouraged academic growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center">
            <Star className="mr-3 h-8 w-8 text-blue-600" />
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-gray-900">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-12 opacity-90">
            Let's connect and discuss opportunities in AI/ML and innovative tech solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:rahul@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://github.com/rahul-1809" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8 text-sm opacity-75">
            <a href="https://leetcode.com/rahul1809" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <Code className="inline mr-1 h-4 w-4" />
              LeetCode
            </a>
            <a href="https://www.codechef.com/users/rahul1809" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <Code className="inline mr-1 h-4 w-4" />
              CodeChef
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Patnala Rahul. Built with passion for AI/ML innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
