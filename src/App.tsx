import React, { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Mail, Linkedin, FileText } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import ContactForm from './components/ContactForm';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="animate flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Srishant Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              UI/UX Designer & Graphic Designer
            </p>
            <div className="flex gap-4">
              <a href="mailto:srishant054@gmail.com" className="btn-primary">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/iamsrishant" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="section-title">About Me</h2>
          <div className="animate grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate UI/UX Designer with experience in mobile and web UI redesigns. Currently pursuing BTech in Computer Science at IIIT Agartala, I specialize in creating intuitive and visually appealing digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="stat-card">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Education</h3>
                <p>BTech in CS</p>
              </div>
              <div className="stat-card">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold">Experience</h3>
                <p>2+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="IPL Mobile App UI"
              description="Complete redesign of the IPL mobile application with enhanced user experience"
              image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
              link="https://shorturl.at/RULZB"
            />
            <ProjectCard
              title="Matrimonial App UI"
              description="Modern matrimonial application design focusing on user engagement"
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80"
              link="https://shorturl.at/yET1h"
            />
            <ProjectCard
              title="JobMatcher App"
              description="Job matching platform with intuitive interface and smooth interactions"
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              link="#"
            />
            <ProjectCard
              title="Logo Design Collection"
              description="Collection of minimalist and modern logo designs for various brands"
              image="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
              link="https://www.behance.net/srishant"
            />
            <ProjectCard
              title="Event Posters & Flyers"
              description="Creative poster and flyer designs for college events and festivals"
              image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
              link="https://www.behance.net/srishant"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-12">
            <TimelineItem
              title="UI/UX Designer"
              company="Lole Development"
              period="June 2024 - August 2024"
              description="Led UI/UX design projects and collaborated with development team"
            />
            <TimelineItem
              title="Graphic Designer"
              company="VivahSahyog"
              period="September 2023 - Present"
              description="Created visual assets and marketing materials"
            />
            <TimelineItem
              title="Design Lead"
              company="Pixels Club NIT Agartala"
              period="August 2024 - Present"
              description="Led design team and organized design workshops"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Get In Touch</h2>
          <div className="animate grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a href="mailto:srishant054@gmail.com" className="contact-link">
                  <Mail className="w-5 h-5" />
                  srishant054@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/iamsrishant" className="contact-link">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
                <a href="https://www.behance.net/srishant" className="contact-link">
                  <FileText className="w-5 h-5" />
                  Behance Portfolio
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>© 2024 Srishant Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;