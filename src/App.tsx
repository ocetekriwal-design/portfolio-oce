
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { PixelIcon } from './components/PixelIcon';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-[#FF007F] selection:text-white overflow-hidden font-pixel">
      <Navigation />
      
      {/* Hero Section */}
      <Section id="hero" className="flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-10">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <PixelIcon type="flower" className="animate-pulse" size={48} />
              <span className="text-[#FF007F] text-xl md:text-3xl tracking-[0.3em] font-pixel uppercase">
                SYSTEMS_INIT: ACTIVE
              </span>
            </div>
            
            <h1 className="text-[15vw] lg:text-[14vw] leading-[0.75] font-pixel uppercase text-white mb-8">
              Oce <br />
              <span className="text-[#FF007F]">Tekriwal</span>
            </h1>
            
            <div className="max-w-3xl border-l-4 border-[#FF007F] pl-6 py-2">
              <p className="text-2xl md:text-5xl font-grotesk font-black uppercase leading-[0.85] tracking-tighter text-neutral-200">
                Communication Designer working across <span className="text-[#FF007F]">Branding</span>, <span className="text-[#FF007F]">Typography</span>, 
                <span className="text-[#FF007F]">UI/UX</span> & <span className="text-white">AI-Integrated Design</span>.
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex flex-col items-end gap-12 relative">
             <div className="border-4 border-[#FF007F] p-6 bg-black flex flex-col gap-4 max-w-[240px]">
                <div className="flex justify-between items-center text-xs text-[#FF007F]">
                  <span>V_CORE: 2.5</span>
                  <PixelIcon type="arrow" size={16} />
                </div>
                <div className="h-px bg-[#FF007F]/30 w-full" />
                <p className="text-sm font-grotesk text-white uppercase leading-tight">
                  Experimental communication systems for digital futures.
                </p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#FF007F]" />
                  <div className="w-2 h-2 bg-[#FF007F]/40" />
                  <div className="w-2 h-2 bg-[#FF007F]/10" />
                </div>
             </div>
             
             <div className="relative">
                <PixelIcon type="globe" className="text-white/10 animate-spin [animation-duration:20s]" size={320} />
                <PixelIcon type="star" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF007F] animate-pulse" size={120} />
             </div>
          </div>
        </div>

        {/* Floating background markers to fill the space */}
        <div className="absolute top-[20%] right-[5%] flex flex-col gap-4 opacity-20 hidden md:flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-px bg-[#FF007F]" />
          ))}
        </div>

        {/* Horizontal Marquee / Ticker at bottom of hero */}
        <div className="absolute bottom-12 left-0 w-full bg-[#FF007F] py-2 overflow-hidden whitespace-nowrap rotate-[-1deg] translate-y-12 lg:translate-y-0">
          <div className="flex animate-[marquee_20s_linear_infinite] font-pixel text-black text-2xl uppercase tracking-[0.5em]">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8">
                DESIGN SYSTEMS * BRAND IDENTITY * AI INTEGRATION * PIXEL EDITORIAL * TYPE DESIGN * 
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </Section>

      {/* Work Section */}
      <Section id="work" showTitle title="Selected Work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FF007F]/20">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-black overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-[#FF007F]/60 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[12px] bg-black text-white font-pixel px-2 py-0.5 border border-[#FF007F]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-pixel text-xl text-[#FF007F] group-hover:text-white">{project.year}</span>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-5xl md:text-6xl font-pixel text-white leading-none mb-2">
                    {project.title}
                  </h3>
                  <p className="font-grotesk text-sm md:text-base text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <PixelIcon type="arrow" className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" showTitle title="The Designer">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <p className="text-5xl md:text-7xl font-pixel leading-none text-white uppercase">
              EXPERIMENTAL <br />
              <span className="text-[#FF007F]">DIGITAL NATIVE.</span>
            </p>
            <p className="font-grotesk text-xl md:text-2xl text-neutral-400 leading-tight tracking-tight uppercase">
              Oce Tekriwal is a multidisciplinary designer who thrives at the intersection of early-internet aesthetics and future-focused technology. 
              By blending high-contrast Y2K visual languages with modern AI-integrated workflows, Oce crafts digital experiences that feel both nostalgic and revolutionary.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#FF007F]/40">
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="star" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">ADOBE CREATIVE SUITE</span>
              </div>
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="globe" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">AI GENERATIVE DESIGN</span>
              </div>
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="crosshair" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">VISUAL SYSTEMS</span>
              </div>
            </div>
          </div>
          
          <div className="relative p-1 bg-[#FF007F]">
             <div className="bg-black p-8 flex flex-col gap-8">
                <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-[#FF007F]">
                  <img 
                    src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover contrast-150 grayscale mix-blend-screen"
                    alt="Creative Portrait Placeholder"
                  />
                </div>
                <div className="font-pixel text-4xl leading-none text-[#FF007F]">
                  OT_SYS v2.0.25
                  <div className="text-sm mt-2 text-white font-grotesk opacity-60">LOC: GLOBAL_NET // STATUS: ACTIVE</div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="justify-center items-center text-center overflow-hidden">
        <div className="relative z-10 w-full px-4">
          <div className="mb-12 animate-float">
            <PixelIcon type="flower" size={200} />
          </div>
          
          <h2 className="text-[12vw] font-pixel leading-none uppercase text-white mb-12">
            Let's <span className="text-[#FF007F]">Build</span>
          </h2>
          
          <div className="flex flex-col gap-8 items-center">
            <a href="mailto:hello@ocetekriwal.com" className="text-4xl md:text-7xl font-pixel hover:text-[#FF007F] transition-all underline decoration-4 underline-offset-[12px] decoration-[#FF007F]">
              hello@ocetekriwal.com
            </a>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-24 mt-12">
              <a href="#" className="text-2xl font-pixel text-[#FF007F] hover:text-white transition-colors">INSTAGRAM</a>
              <a href="#" className="text-2xl font-pixel text-[#FF007F] hover:text-white transition-colors">LINKEDIN</a>
              <a href="#" className="text-2xl font-pixel text-[#FF007F] hover:text-white transition-colors">BEHANCE</a>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-[#FF007F]/20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-pixel text-neutral-600 uppercase tracking-widest">
              <span>DESIGNED BY OCE TEKRIWAL</span>
              <div className="flex items-center gap-8">
                <PixelIcon type="star" size={24} className="text-neutral-800" />
                <PixelIcon type="globe" size={24} className="text-neutral-800" />
                <PixelIcon type="star" size={24} className="text-neutral-800" />
              </div>
              <span>&copy; 2025 ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </div>
        
        {/* Background Scrolling Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] rotate-[-15deg] opacity-[0.03] pointer-events-none select-none font-pixel text-[20vw] whitespace-nowrap overflow-hidden">
          OCE TEKRIWAL OCE TEKRIWAL OCE TEKRIWAL OCE TEKRIWAL
        </div>
      </Section>

      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:flex items-center justify-center text-[#FF007F]"
        style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)` }}
      >
        <PixelIcon type="crosshair" size={32} />
      </div>
    </div>
  );
};

export default App;
