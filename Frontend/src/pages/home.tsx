// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => {
//         navigate("/area-of-study")
//       }}>
//         Get in
//       </button>
//     </div >
//   )
// }

// export default Home

import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";

const Home = () => {
  // In your actual app, this uses the real useNavigate hook
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl">
          <Sparkles size={14} />
          <span>Next Gen Learning Platform</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl  md:text-6xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Master any subject with <br />
          <span className="text-indigo-500">Curated Materials.</span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          The fastest way to find high-quality learning websites and videos
          tailored to your area of study. No more searching, just learning.
        </p>

        {/* Primary Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/area-of-study")}
            className="group relative px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-indigo-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              Get Started for Free
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-left hover:border-indigo-500/50 transition-colors group">
            <Zap
              className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform"
              size={24}
            />
            <h3 className="font-bold mb-2">Instant Search</h3>
            <p className="text-slate-500 text-sm">
              Find resources for any topic in under 2 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-left hover:border-indigo-500/50 transition-colors group">
            <Globe
              className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform"
              size={24}
            />
            <h3 className="font-bold mb-2">Web & Video</h3>
            <p className="text-slate-500 text-sm">
              The best of documentation and video tutorials in one place.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-left hover:border-indigo-500/50 transition-colors group">
            <ShieldCheck
              className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform"
              size={24}
            />
            <h3 className="font-bold mb-2">Verified Content</h3>
            <p className="text-slate-500 text-sm">
              Curated lists ensuring you only get the highest quality info.
            </p>
          </div>
        </div>
      </main>

      {/* Sharp Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Home;
