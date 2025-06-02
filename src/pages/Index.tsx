
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Trophy, GraduationCap, Briefcase, Star, ExternalLink, Download, Menu, X, ArrowRight, MapPin, Calendar } from 'lucide-react';
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

  const stats = [
    { number: '3.5', label: 'Years Experience', suffix: '+' },
    { number: '10', label: 'Projects Completed', suffix: '+' },
    { number: '2', label: 'Internships', suffix: '' },
    { number: '92', label: 'Top Percentile', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="text-xl font-bold text-gray-900">Patnala Rahul</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeSection === item.id
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('contact')} 
              className="hidden md:block bg-purple-600 hover:bg-purple-700"
            >
              Contact
            </Button>

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
            <div className="md:hidden py-4 border-t border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>AI/ML ENTHUSIAST</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Hello, I'm{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Patnala Rahul
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  I'm a B.Tech CSE (AI & ML) student passionate about building intelligent systems that solve real-world problems. 
                  With hands-on experience in AI-powered projects and internships, I aim to bring impactful ideas to life using data and code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 rounded-xl font-medium border-2 hover:bg-gray-50"
                >
                  Say Hello!
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Rajam, Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Patnala Rahul"
                  className="w-80 h-80 mx-auto rounded-3xl object-cover border-4 border-white shadow-2xl"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="text-2xl font-bold text-purple-600">9.1</div>
                <div className="text-sm text-gray-600">Current GPA</div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating intelligent solutions through code and data
            </p>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-purple-600" />
              Education Journey
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                        <p className="text-purple-600 font-medium mb-2">{edu.degree}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-3 md:mt-0 bg-purple-100 text-purple-800 px-4 py-2">
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
              <Briefcase className="mr-3 h-6 w-6 text-purple-600" />
              Professional Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {internship.title}
                    </CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {internship.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{internship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-0 max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Aspiration</h4>
              <p className="text-lg text-gray-600">
                Seeking AI/ML-focused roles to contribute to intelligent system development and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical skills spanning AI/ML, web development, and data science
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <CardTitle className="capitalize text-lg group-hover:text-purple-600 transition-colors">
                    {category === 'soft' ? 'Soft Skills' : category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 hover:from-purple-200 hover:to-blue-200 transition-all px-3 py-1"
                      >
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative solutions built with cutting-edge AI/ML technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg group-hover:text-purple-600 transition-colors">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-purple-200 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200" asChild>
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
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Trophy className="mr-4 h-10 w-10 text-yellow-600" />
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards and recognitions that showcase excellence in data science and machine learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg border-l-4 border-l-yellow-500 group">
                <CardContent className="p-8">
                  <p className="text-lg font-medium text-gray-900 group-hover:text-yellow-700 transition-colors">
                    {achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 text-center">Leadership & Community Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    CSI Student Chapter Coordinator
                  </h4>
                  <p className="text-purple-600 font-medium mb-2">2023–Present</p>
                  <p className="text-gray-600">Organized 10+ tech workshops and contests</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Community Teaching Volunteer
                  </h4>
                  <p className="text-green-600 font-medium mb-2">2024</p>
                  <p className="text-gray-600">Taught Python to ZPHS students, encouraged academic growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Star className="mr-4 h-10 w-10 text-blue-600" />
              Certifications & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning through industry-recognized certifications and courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {cert}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect & Collaborate</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Ready to discuss opportunities in AI/ML and innovative tech solutions? I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl" asChild>
              <a href="mailto:rahul@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl" asChild>
              <a href="https://github.com/rahul-1809" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <a href="https://leetcode.com/rahul1809" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex items-center">
              <Code className="inline mr-2 h-4 w-4" />
              LeetCode
            </a>
            <a href="https://www.codechef.com/users/rahul1809" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex items-center">
              <Code className="inline mr-2 h-4 w-4" />
              CodeChef
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-lg font-semibold">Patnala Rahul</span>
          </div>
          <p className="text-gray-400">
            © 2024 Patnala Rahul. Built with passion for AI/ML innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
