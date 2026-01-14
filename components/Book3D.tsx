
import React from 'react';

const Book3D: React.FC = () => {
  const coverImageUrl = "https://lh3.googleusercontent.com/sitesv/AAzXCkeSBtlN0NQxr3gE9HC9AvVLXm3e3YhN4XmEGiDkbnB4K_yh9-q6-wZ1UjnI6vvpUiUb2cquNIxliZzpuKWAZKeL4amMnQ4uaOTuAmbzcr47cyiUrnusCiKtGkMX8CAp64HE8pHZD4M5SK7_a3YkRugvb_PsJ0DKveazRenlW4ChkBj_b3uLXnLX6oJWvTbDP4VmIZXGIOwVNNkxkpqvnHmy1-8xbjWO-8h5n9g=w1280";

  return (
    <div className="relative group cursor-pointer" style={{ perspective: '1500px' }}>
      <div 
        className="w-[280px] h-[400px] relative transition-transform duration-1000 ease-out preserve-3d group-hover:rotate-y-[-28deg] group-hover:rotate-x-[8deg]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Spine */}
        <div 
          className="absolute left-0 top-0 w-[54px] h-full border-r border-slate-700 shadow-xl"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(27px)',
            background: 'linear-gradient(to right, #020617 0%, #1e293b 100%)'
          }}
        >
          <div className="h-full flex items-center justify-center -rotate-90">
             <span className="text-slate-500 text-[9px] font-bold tracking-[0.4em] uppercase whitespace-nowrap opacity-50">
               SURVIVAL GUIDE PROTOCOL v1.0.4
             </span>
          </div>
        </div>

        {/* Front Cover */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-900 rounded-sm overflow-hidden border border-slate-800 shadow-2xl"
          style={{ 
            transform: 'translateZ(27px)',
            backgroundImage: `url(${coverImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Glint Animation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>

        {/* Back Cover */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-950 border border-slate-800"
          style={{ transform: 'translateZ(-27px)' }}
        ></div>
      </div>
      
      {/* Dynamic Shadow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/60 blur-3xl rounded-full group-hover:scale-x-110 transition-transform duration-700"></div>
    </div>
  );
};

export default Book3D;
