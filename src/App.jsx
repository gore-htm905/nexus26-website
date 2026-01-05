import React, { useState, useEffect } from 'react';
import { Calendar, Users, Zap, Award } from 'lucide-react';

export default function Nexus26Website() {
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [galleryIndex, setGalleryIndex] = useState(0); // ✅ HERE

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-01-15T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      title: "Rotor X",
      category: "Tech",
      description: "Rotor X: A 2-day hands-on drone workshop covering flight basics, assembly, applications, and a final presentation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      link: "https://forms.google.com/your-rotor-x-form",
      rulebookLink: "https://example.com/rulebook-rotor-x.pdf",
      fullDescription: "Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone.",
      coordinators: [
        { name: "Harish Patil", phone: "8767559134" },
        { name: "Aayush Benade", phone: "8856927697" },
        { name: "Nimisha Halabe", phone: "9028401706" }
      ]
    },
    {
      title: "Hardware Hackathon",
      category: "Tech",
      description: "Hardware Hackathon: Innovate, build, and create groundbreaking robotic solutions to real-world challenges with skill, passion, and creativity!",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
      link: "https://forms.google.com/your-hardware-hackathon-form",
      rulebookLink: "https://example.com/rulebook-hardware.pdf",
      fullDescription: "A 12-hour hardware hackathon where teams compete to build innovative robotic solutions to solve real-world problems.",
      coordinators: [
        { name: "Coordinator 1", phone: "1234567890" },
        { name: "Coordinator 2", phone: "0987654321" }
      ]
    },
    {
      title: "Solo Not Solo",
      category: "Non-Tech",
      description: "Solo Not Solo: Start alone, get teamed up, tackle challenges, and finish strong together!",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&auto=format&fit=crop",
      link: "https://forms.google.com/your-solo-not-solo-form",
      rulebookLink: "https://example.com/rulebook-solo.pdf",
      fullDescription: "An exciting team-building event where participants start solo and get randomly paired to compete in various fun challenges.",
      coordinators: [
        { name: "Coordinator 1", phone: "1234567890" },
        { name: "Coordinator 2", phone: "0987654321" }
      ]
    },
    {
      title: "Raw & Unfiltered",
      category: "Non-Tech",
      description: "Raw and Unfiltered: Perform anything, start solo or group up, and let your talent shine freely!",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
      link: "https://forms.google.com/your-raw-unfiltered-form",
      rulebookLink: "https://example.com/rulebook-raw.pdf",
      fullDescription: "Your stage, your spotlight, your moment! Showcase any talent in this open performance event.",
      coordinators: [
        { name: "Coordinator 1", phone: "1234567890" },
        { name: "Coordinator 2", phone: "0987654321" }
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    
    // For "team" section, scroll to footer/contact since there's no separate team section
    const targetId = sectionId === 'team' ? 'contact' : sectionId;
    
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 64; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const logos = {
    logo1: "https://via.placeholder.com/150x150?text=Logo+1", // Replace with your first logo URL
    logo2: "https://via.placeholder.com/150x150?text=Logo+2", // Replace with your second logo URL
    logo3: "https://via.placeholder.com/150x150?text=Logo+3"  // Replace with your third logo URL
  };

  const sponsors = [
    { 
      name: "Tech Corp", 
      logo: "https://via.placeholder.com/200x100?text=Tech+Corp"
    },
    { 
      name: "Innovation Labs", 
      logo: "https://via.placeholder.com/200x100?text=Innovation+Labs"
    },
    { 
      name: "Future Systems", 
      logo: "https://via.placeholder.com/200x100?text=Future+Systems"
    },
    { 
      name: "Digital Ventures", 
      logo: "https://via.placeholder.com/200x100?text=Digital+Ventures"
    },
    { 
      name: "Cloud Networks", 
      logo: "https://via.placeholder.com/200x100?text=Cloud+Networks"
    },
    { 
      name: "Data Solutions", 
      logo: "https://via.placeholder.com/200x100?text=Data+Solutions"
    },
    { 
      name: "AI Research", 
      logo: "https://via.placeholder.com/200x100?text=AI+Research"
    },
    { 
      name: "Quantum Tech", 
      logo: "https://via.placeholder.com/200x100?text=Quantum+Tech"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop"
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen overflow-x-hidden relative">
      {/* Greek Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23d4af37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Animated Lightning Effect */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-lightning opacity-0"></div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-lg border-b border-amber-500/30 shadow-lg shadow-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-shimmer">
              NEXUS '26
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Events', 'Team', 'Glimpses', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-amber-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Greek columns effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Greek pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(212, 175, 55, 0.3) 10px, rgba(212, 175, 55, 0.3) 20px)`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fadeIn">
          {/* Logos with golden glow */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-white rounded-full flex items-center justify-center border-4 border-amber-400/50 overflow-hidden shadow-2xl shadow-amber-500/30 animate-float">
              <img src={logos.logo1} alt="Logo 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-white rounded-full flex items-center justify-center border-4 border-amber-400/50 overflow-hidden shadow-2xl shadow-amber-500/30 animate-float" style={{animationDelay: '0.2s'}}>
              <img src={logos.logo2} alt="Logo 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-white rounded-full flex items-center justify-center border-4 border-amber-400/50 overflow-hidden shadow-2xl shadow-amber-500/30 animate-float" style={{animationDelay: '0.4s'}}>
              <img src={logos.logo3} alt="Logo 3" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-sm text-amber-300 mb-4 tracking-wider animate-slideUp">
            Pimpri Chinchwad College of Engineering
          </div>
          <div className="text-sm text-amber-200 mb-8 animate-slideUp" style={{animationDelay: '0.1s'}}>
            Department of Electronics and Telecommunication Presents
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl animate-slideUp" style={{
            animationDelay: '0.2s',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
          }}>
            NEXUS '26
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-amber-100 mb-12 font-light animate-slideUp" style={{animationDelay: '0.3s'}}>
            ⚡ The Ultimate Tech Convergence ⚡
          </h2>

          {/* Technical Sponsors with marble effect */}
          <div className="mt-12 animate-slideUp" style={{animationDelay: '0.4s'}}>
            <p className="text-amber-300 mb-4">Technical Sponsors</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/40 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105">
                IETE
              </div>
              <div className="px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/40 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105">
                IEEE
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with golden glow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center p-2 shadow-lg shadow-amber-500/50">
            <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Sponsors Marquee */}
      <div className="py-12 bg-gradient-to-r from-blue-950/50 to-slate-900/50 border-y border-amber-500/30">
        <h3 className="text-center text-2xl mb-8 text-amber-300 font-semibold">⚜️ Our Proud Sponsors ⚜️</h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/30 rounded-lg flex flex-col items-center justify-center p-4 gap-3 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="h-16 object-contain filter brightness-110"
                />
                <p className="text-amber-300 font-semibold text-center text-sm">
                  {sponsor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="py-20 px-4 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent animate-slideUp relative z-10">
          ⚔️ Events ⚔️
        </h2>
        <p className="text-center text-amber-200/70 mb-16 animate-slideUp" style={{animationDelay: '0.1s'}}>
          Forge Your Legend in These Epic Challenges
        </p>
        
        {/* First Row - 2 Events */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedEvent(event)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 animate-slideUp"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-amber-400 mb-2 font-semibold tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    Department of EnTC • {event.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-100 group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="text-amber-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Click to see details 
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Next 2 Events */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {events.slice(2, 4).map((event, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedEvent(event)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 animate-slideUp"
                style={{animationDelay: `${(idx + 2) * 0.1}s`}}
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-amber-400 mb-2 font-semibold tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    Department of EnTC • {event.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-100 group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="text-amber-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Click to see details 
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedEvent(null)}>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-4 border-amber-500/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-amber-500/30 animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400 rounded-br-3xl"></div>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-amber-400/20 hover:bg-amber-400/30 rounded-full transition-all z-10 border border-amber-400/50"
            >
              <span className="text-amber-300 text-2xl">×</span>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                ⚡ {selectedEvent.title} ⚡
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedEvent.fullDescription}
              </p>

              {/* Coordinators */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-amber-400/20">
                <h3 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
                  <span>👥</span> Coordinators:
                </h3>
                <div className="space-y-2">
                  {selectedEvent.coordinators.map((coordinator, idx) => (
                    <div key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="text-amber-400">⚜️</span>
                      {coordinator.name}: <span className="text-amber-400 font-semibold">{coordinator.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={selectedEvent.rulebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-full text-white font-semibold text-center transition-all border-2 border-amber-400/30 hover:border-amber-400/60 shadow-lg"
                >
                  📜 Event Rules
                </a>
                <a
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 rounded-full text-slate-900 font-bold text-center transition-all shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-105"
                >
                  ⚡ Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Countdown Timer */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50 border-y border-amber-500/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-100 relative z-10">
          ⏳ NEXUS'26 ⏳
        </h2>
        <p className="text-center text-amber-300/70 mb-12 relative z-10">The Gods Await Your Arrival</p>
        <div className="flex justify-center gap-8 flex-wrap max-w-4xl mx-auto relative z-10">
          {[
            { label: 'days', value: timeLeft.days },
            { label: 'hours', value: timeLeft.hours },
            { label: 'minutes', value: timeLeft.minutes },
            { label: 'seconds', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="text-center animate-float" style={{animationDelay: `${idx * 0.2}s`}}>
              <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-amber-400/50 rounded-2xl flex items-center justify-center mb-2 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <div className="text-amber-300 text-sm uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
{/* Gallery Section */}
<div id="glimpses" className="py-20 px-4 relative">
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

  <h2 className="text-4xl font-bold text-center mb-4 text-amber-100">
    🏛️ Glimpses '25 🏛️
  </h2>
  <p className="text-center text-amber-300/70 mb-10">
    Legends of the Past Year
  </p>

  <div className="max-w-6xl mx-auto relative overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
    >
      {gallery.map((img, idx) => (
        <div key={idx} className="min-w-full flex justify-center">
          <img
            src={img}
            alt={`Glimpse ${idx + 1}`}
            className="w-[85%] h-[420px] object-cover rounded-2xl border-4 border-amber-400/40 shadow-xl"
          />
        </div>
      ))}
    </div>

    {/* Controls */}
    <button
      onClick={() =>
        setGalleryIndex(galleryIndex === 0 ? gallery.length - 1 : galleryIndex - 1)
      }
      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                 bg-slate-900/80 hover:bg-amber-400 text-amber-300
                 hover:text-slate-900 text-2xl transition"
    >
      ‹
    </button>

    <button
      onClick={() =>
        setGalleryIndex(galleryIndex === gallery.length - 1 ? 0 : galleryIndex + 1)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                 bg-slate-900/80 hover:bg-amber-400 text-amber-300
                 hover:text-slate-900 text-2xl transition"
    >
      ›
    </button>
  </div>
</div>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-t-2 border-amber-500/30 py-12 relative overflow-hidden">
        {/* Greek pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(212, 175, 55, 0.3) 10px, rgba(212, 175, 55, 0.3) 20px)`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300 flex items-center gap-2">
                <span>⚒️</span> Developer Credits
              </h3>
              <p className="text-gray-400">Your Name</p>
              <p className="text-gray-400">Your Team</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300 flex items-center gap-2">
                <span>📜</span> Quick Links
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">Terms and Conditions</a>
                <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">Contact Us</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300 flex items-center gap-2">
                <span>🔱</span> Connect With Us
              </h3>
              <p className="text-gray-400">Follow us on social media for updates</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-amber-500/20">
            © 2026 NEXUS. All rights reserved. ⚡ Powered by the Gods of Olympus ⚡
          </div>
        </div>
      </footer>

      <style>{`
      
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes gallery-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-gallery-scroll {
          animation: gallery-scroll 40s linear infinite;
        }
        .animate-gallery-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes lightning {
          0%, 90%, 100% {
            opacity: 0;
          }
          95% {
            opacity: 1;
          }
        }
        .animate-lightning {
          animation: lightning 10s ease-in-out infinite;
        }
        
      `}</style>
    </div>
  );
}