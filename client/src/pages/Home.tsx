import { useState } from "react";
import {
  ArrowRight, Users, Clock, Lightbulb, Presentation,
  Download, Github, ExternalLink, Calendar, CheckCircle,
  ShieldCheck, Quote, Mail, MapPin, Linkedin, Twitter, Instagram
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { WinnerCard } from "@/components/WinnerCard";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60" />
          {/* Medical DNA-like pattern (CSS radial gradient approximation) */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Event Concluded • 2025 Edition
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-foreground">
              MED<span className="text-primary">AI</span>THON <br/> 2025
            </h1>
            
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <img 
                src="/code.jpeg" 
                alt="MED AI THON 2025 Code" 
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
              />
            </div>
            
            <p className="text-xl text-muted-foreground md:w-3/4 leading-relaxed">
              Thank you for an incredible 50 hours of innovation. Witnessing the future of AI in healthcare, built by you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ScrollLink to="winners" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  View Winners <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ScrollLink>
              <ScrollLink to="highlights" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-2 hover:bg-slate-50">
                  Event Highlights
                </Button>
              </ScrollLink>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            {/* Unsplash image: doctor looking at digital screen or abstract tech */}
            {/* medical artificial intelligence research */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                 alt="Medical Technology Innovation"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-bold text-lg">200+ Participants</p>
                    <p className="text-white/80 text-sm">Innovating for better health</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUMMARY */}
      <Section id="summary" className="bg-white">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display">Bridging Code & Cure</h2>
          <p className="text-lg text-muted-foreground">
            For 50 intense hours, developers, data scientists, and medical professionals collaborated to solve critical healthcare challenges using Artificial Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Innovation",
              desc: "Develop cutting-edge AI solutions for healthcare challenges",
              icon: SearchScan
            },
            {
              title: "50-Hour Sprint",
              desc: "Intensive coding marathon with continuous development",
              icon: HeartPulse
            },
            {
              title: "Fast-Paced",
              desc: "Rapid prototyping and iterative development process",
              icon: ShieldCheck
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary border border-slate-100">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. WINNERS */}
      <Section id="winners" className="bg-slate-50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Hall of Fame</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Out of 40+ submitted prototypes, these projects stood out for their innovation, technical execution, and potential impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WinnerCard 
            rank="grand"
            teamName="YOLO"
            projectTitle="INTEGRATED AI-DRIVEN HOSPITAL MANAGEMENT ECOSYSTEM"
            description="I-HMSE (Intelligent Hospital Management and Support Ecosystem) is a cloud-based, modular platform that can help hospitals with all of their operational problems. It uses a microservices architecture to bring together solutions for 54 important hospital functions, such as clinical, financial, and logistical operations."
          />
          
          <WinnerCard 
            rank="runner-up"
            teamName="Team Velocity"
            projectTitle="Building a Fully Integrated Digital Hospital"
            description="Comprehensive digital transformation platform for hospital operations."
          />
          
          <WinnerCard 
            rank="runner-up"
            teamName="Med AI Bio Intel"
            projectTitle="AI-assisted healthcare management systems"
            description="Intelligent systems for streamlined healthcare administration and patient management."
          />
        </div>
      </Section>

      {/* 4. KEY STATS */}
      <Section id="stats" dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatsCard label="Registered Teams" value="124" icon={Users} delay={0.1} />
          <StatsCard label="Projects Shipped" value="52" icon={Lightbulb} delay={0.2} />
          <StatsCard label="Hours Hacking" value="50" icon={Clock} delay={0.3} />
          <StatsCard label="Mentorship Sessions" value="200+" icon={Presentation} delay={0.4} />
        </div>
      </Section>

      {/* 5. HIGHLIGHTS & 6. GALLERY */}
      <Section id="highlights">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Event Highlights</h2>
            <div className="space-y-4">
              {[
                { title: "Keynote by DR. R. Shivakumar M.D. Ph.D Chairman", desc: "Inauguration ceremony." },
                { title: "Midnight Movie", desc: "Refreshing and refueling at 2 AM." },
                { title: "Demo Day Pitching", desc: "3 minutes to impress the VC judges." },
              ].map((highlight, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Unsplash: hackathon coding collaboration */}
            <img src="/gallery5.png" alt="Hackathon Crowd" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            {/* Unsplash: presentation screen */}
            <img src="/gallery6.png" alt="Presentation" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>

        {/* Gallery Grid */}
        <h3 className="text-2xl font-bold mb-8">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
             // hackathon coding
            "/gallery1.png",
             // tech team high five
            "/gallery2.jpg",
             // robot arm medical
            "/gallery3.jpg",
             // doctor ipad
            "/gallery4.jpg"
          ].map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* 7. TESTIMONIALS */}
      <Section id="testimonials" className="bg-blue-50/50">
        <h2 className="text-3xl font-bold text-center mb-12">Voices from the Floor</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "The mentorship quality was outstanding. We pivoted our idea thanks to feedback from real surgeons." },
            { text: "Incredible energy. These prototypes aren't just toys; they have real clinical potential,Judge" },
            { text: "Best organized hackathon I've attended in years. The organisers were super helpful. Participant" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-lg mb-6 italic text-muted-foreground">"{t.text}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. TIMELINE */}
      <Section id="timeline">
        <h2 className="text-3xl font-bold mb-12 text-center">Retrospective Timeline</h2>
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {[
            { time: "Day 1 - 18:00", title: "Kickoff & Team Formation", desc: "Ideas pitched, teams formed, pizza consumed." },
            { time: "Day 2 - 14:00", title: "Mentorship Rounds", desc: "Industry experts provided critical feedback." },
            { time: "Day 3 - 09:00", title: "Code Freeze", desc: "Hands off keyboards. Submission deadline." },
            { time: "Day 3 - 15:00", title: "Awards Ceremony", desc: "Winners announced and prizes distributed." },
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <time className="font-mono text-xs text-slate-500">{item.time}</time>
                </div>
                <div className="text-slate-500 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. RESOURCES & 10. COMPLIANCE */}
      <Section id="resources" className="bg-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Data Compliance</h2>
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-amber-500 mb-2">Ethics Statement</h3>
              <p className="text-white/80 leading-relaxed">
                All projects adhered to strict HIPAA-compliant dummy data standards. No real patient data was used or stored during this event. All code is open-sourced under MIT license unless otherwise specified by teams.
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* 13. CONTACT & 14. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="container-width grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
             <span className="font-display font-bold text-2xl text-white block mb-4">
              MED<span className="text-primary">AI</span>THON
            </span>
            <p className="max-w-sm mb-6">
              Empowering the next generation of healthcare innovators through collaborative coding and artificial intelligence.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> medaithon50.srmtrc@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> SRM Nagar, Trichy – Chennai Highway, Near Samayapuram, Tiruchirappalli – 621105, Tamil Nadu, India.
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Code of Conduct</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="container-width text-center text-sm">
          &copy; 2025 MED AI THON. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Helper icons for the summary section
function SearchScan(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6" />
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="m9 2 2.5 10H14" />
    </svg>
  );
}

function HeartPulse(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
