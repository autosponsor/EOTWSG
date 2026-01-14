
import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const authorImageUrl = "https://lh3.googleusercontent.com/sitesv/AAzXCkfWkJHGa0nL4kdwz0wFh293gkr_8gYteS0vfMpidYkhrh_TQbijlc1Dk-8LQQpsPK6JP_wZy92PiAdkQKaxTVI3kLdJmyPySjxcfq-XWZ1mBAFML9DE5t-22eam12TDJRoIMAAZNbuD21GSR8aYhabrrJfIKfaRTFRkPB3oEjxv9ajVeX4HRlZ8Wd0Z8NYiKOjSwVx8K-1byxsEv9g3pUnNa2Un8NX_zs-4ToI=w1280";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="aspect-square bg-slate-900 overflow-hidden grayscale contrast-125 rounded-sm border border-slate-800 shadow-2xl">
            <img 
              src={authorImageUrl}
              alt="Matthew Danielson" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm p-4 flex flex-col justify-end shadow-lg">
            <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">Author</span>
            <span className="text-xs font-bold text-white tracking-widest uppercase">Researcher</span>
          </div>
        </div>

        <div className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-['Oswald'] uppercase tracking-tight text-white">
              About the <span className="text-orange-500">Author</span>
            </h2>
            <p className="text-orange-500/80 text-xs font-bold tracking-[0.3em] uppercase">Matthew Danielson</p>
          </div>

          <div className="space-y-6 text-gray-400 text-sm leading-loose uppercase tracking-widest">
            <p>
              Matthew Danielson is a researcher and outdoorsman whose expertise is rooted in a lifetime of firsthand experience.
            </p>
            <p>
              Born and raised in Ontario, Canada, his foundation in self-reliance began in the rugged Canadian wilderness. Eschewing traditional academic or military paths, Matthew has built his knowledge base through years of rigorous independent research of public data and official documents.
            </p>
            <p>
              His "boots-on-the-ground" education combined with practical experience navigating remote waterways and living off the land serves as the filter through which this entire guide was written.
            </p>
          </div>

          <div className="pt-4 border-l-2 border-orange-500 pl-6 bg-slate-900/10 p-4">
            <p className="italic text-gray-400 text-sm leading-relaxed">
              "This guide is an antidote to dependency. It is not a collection of fear-mongering scenarios, but a practical, actionable manual for reclaiming personal sovereignty."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
