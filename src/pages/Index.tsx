import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Trophy, GraduationCap, Briefcase, Star, ExternalLink, Download, Menu, X, ArrowRight, MapPin, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
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
          const {
            offsetTop,
            offsetHeight
          } = element;
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
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'achievements',
    label: 'Achievements'
  }, {
    id: 'certifications',
    label: 'Certifications'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const skills = {
    languages: ['C', 'C++', 'Python', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    'frameworks & libraries': ['Flask', 'FastAPI', 'Streamlit', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    databases: ['MySQL', 'SQLite3'],
    tools: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Kaggle'],
    concepts: ['Data Structures & Algorithms', 'OOP', 'Machine Learning', 'Deep Learning', 'NLP'],
    soft: ['Problem-Solving', 'Communication', 'Collaboration', 'Time Management', 'Adaptability']
  };
  const projects = [{
    title: 'Real-Time Speech Translator',
    description: 'Real-time multilingual speech-to-speech translation using Google Generative AI. Achieved low latency and integrated TTS output with MP3 download.',
    tech: ['Gemini', 'SpeechRecognition', 'Streamlit', 'Google TTS'],
    github: 'https://github.com/rahul-1809/voice-translator.git'
  }, {
    title: 'Automated College Placement Portal',
    description: 'Role-based platform for job posting, applications, and interview scheduling with real-time updates.',
    tech: ['Flask', 'SQLite3', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahul-1809/College-Placement-Portal.git'
  }, {
    title: 'Toxic Comment Detection',
    description: 'BiLSTM-based model for multi-label toxicity detection with a Gradio interface for real-time predictions.',
    tech: ['TensorFlow', 'BiLSTM', 'Gradio'],
    github: 'https://github.com/rahul-1809/Comment-Toxicity.git'
  }];
  const education = [{
    institution: 'GMR Institute of Technology, Rajam',
    degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
    period: 'Nov 2022 – Apr 2026',
    grade: 'CGPA: 9.1'
  }, {
    institution: 'Sri Viswa Junior College, Visakhapatnam',
    degree: 'Intermediate in Mathematics, Physics, Chemistry (MPC)',
    period: 'Jun 2020 – Apr 2022',
    grade: 'Percentage: 96.8'
  }, {
    institution: 'Srujana Vidyalaya, Rajam',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020',
    grade: 'CGPA: 9.82'
  }];
  const achievements = ['🏆 1st Place – DataCraze (Stepcone 2025): data mining and predictive modeling to extract actionable insights from complex datasets.', '🥇 1st Place – DataViz (Stepcone 2024): data visualization techniques that improved data interpretation and decision-making.'];
  const certifications = [{
    title: 'Complete Data Science, ML, DL, NLP Bootcamp (Udemy, 2024)',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a86a8e70-46a8-4c2e-a952-27aefdfe60dd.jpg?v=1747665449000'
  }, {
    title: 'Deep Learning (NPTEL, IIT Ropar, 2024) – 92%, top 1%',
    link: 'https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs21/Course/NPTEL25CS21S96040005604296947.pdf'
  }, {
    title: 'Data Analysis with Python (freeCodeCamp, 2024)',
    link: 'https://www.freecodecamp.org/certification/rahul_1809/data-analysis-with-python-v7'
  }, {
    title: 'Python Preparatory (Intellipaat, 2024)',
    link: 'https://lms.intellipaat.com/certificate-link/?Yz1jdXMtMTEyNjgyOCZ1PTI4ODExMCZleHQ9MQ=='
  }];
  const internships = [
    {
      title: 'Edunet Foundation AICTE Internship',
      period: 'Apr–May 2025',
      description: 'Built a movie recommendation system using cosine similarity and metadata. Streamlit-based UI, OMDb API integration.',
      certificateUrl: 'https://drive.google.com/file/d/10Aj114-lw82KwxGZzhyWSEs20omFGgLe/view'
    },
    {
      title: 'TechSaksham Internship (Microsoft, SAP)',
      period: 'Feb–Mar 2025',
      description: 'Developed an osteoporosis prediction tool using XGBoost and Streamlit. Achieved 91.1% F1-score. Healthcare AI exposure.',
      certificateUrl: 'https://drive.google.com/file/d/1-k0GsrT_iEKHkDVnCBKuzaR_Cfm7u6Ya/view'
    }
  ];
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await emailjs.send('service_4tu3znw', 'template_hj5dqhd', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }, 'XtG7OL_NXaO0yeQVh');
      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeSection === item.id ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
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
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 rounded-xl font-medium border-2 hover:bg-gray-50"
                  asChild
                >
                  <a href="https://drive.google.com/uc?export=download&id=1BpBRRvK2oyJHIgD8QWEvcQB0RQBFafsY" download="Rahul_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
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
                  src="https://i.postimg.cc/Kj4X3S1D/Screenshot-2025-03-15-203330.png"
                  alt="Patnala Rahul"
                  className="w-80 h-80 mx-auto rounded-3xl object-cover object-top border-4 border-white shadow-2xl"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
            </div>
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
          
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-0 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm Patnala Rahul, a Computer Science undergraduate with a keen interest in Artificial Intelligence and Machine Learning. I enjoy using data to solve real-world problems and build intelligent systems that can make a positive impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Over the past few years, I've gained hands-on experience in machine learning, deep learning, and natural language processing. I've worked on projects like disease risk prediction, real-time speech translation, and sentiment analysis, where I applied my skills to create useful, working solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm always looking to learn, improve, and collaborate on meaningful work. I believe in combining technical knowledge with practical thinking to create solutions that are both innovative and reliable.
              </p>
            </div>
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
                      <Badge variant="secondary" className="mt-3 md:mt-0 bg-purple-100 text-purple-800">
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
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{internship.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-purple-50 group-hover:border-purple-200"
                      asChild
                    >
                      <a href={internship.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
                    {category === 'frameworks & libraries' ? 'Frameworks & Libraries' : 
                     category === 'soft' ? 'Soft Skills' : category}
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
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        {cert.title}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect & Collaborate</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Ready to discuss opportunities in AI/ML and innovative tech solutions? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
                <CardDescription className="text-white/80">
                  Send me a message and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                  </div>
                  <div>
                    <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={5} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl">
                    {isSubmitting ? 'Sending...' : <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Other Ways to Reach Me</h3>
                <div className="space-y-4">
                  <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl w-full justify-start" asChild>
                    <a href="mailto:patnalarahul1809@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      patnalarahul1809@gmail.com
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl w-full justify-start" asChild>
                    <a href="https://github.com/rahul-1809" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      GitHub Profile
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl w-full justify-start" asChild>
                    <a href="https://www.linkedin.com/in/patnala-rahul-0ba801292/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-3">Let's Collaborate!</h4>
                <p className="text-white/80">
                  I'm always interested in discussing new opportunities, innovative projects, and potential collaborations in AI/ML and software development.
                </p>
              </div>
            </div>
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
          <p className="text-gray-400 mb-4">
            Building intelligent solutions for tomorrow's challenges
          </p>
          <p className="text-gray-500 text-sm">© 2025 Patnala Rahul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
