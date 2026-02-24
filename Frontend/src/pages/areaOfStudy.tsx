import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Sparkles,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const AreaOfStudy = () => {
  const [courseName, setCourseName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!courseName.trim()) return;
    try {
      navigate(`/materials/${courseName}`);
    } catch (err) {
      console.log(err, ": error on areaOfStudy component");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white flex flex-col items-center justify-center overflow-hidden relative p-6">
      
      {/* Background Decorative Glows - Matching Home Page */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Icon Area */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-slate-900 p-4 rounded-3xl shadow-2xl border border-slate-800">
              <GraduationCap size={40} className="text-indigo-500" />
            </div>
            <div className="absolute -top-2 -right-2 bg-indigo-500 p-1.5 rounded-full shadow-lg border-2 border-slate-950 animate-bounce">
              <Sparkles size={14} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content Card - Dark Sharp Design */}
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-800 p-8 md:p-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight mb-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            What do you want to <span className="text-indigo-500">learn</span>?
          </h1>
          <p className="text-slate-400 mb-8 font-medium">
            Enter your study area to discover curated learning resources,
            websites, and videos.
          </p>

          <div className="space-y-4">
            {/* Input Field Group */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. React Development, UI Design..."
                className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border-2 border-slate-800 focus:border-indigo-500 focus:bg-slate-950 rounded-2xl outline-none transition-all text-white font-medium placeholder:text-slate-600"
              />
            </div>

            {/* Action Button */}
            <button
              onClick={handleClick}
              disabled={!courseName.trim()}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                courseName.trim()
                  ? "bg-white text-slate-950 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-500/20 hover:-translate-y-0.5"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
              }`}
            >
              Start Learning
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Quick Suggestions */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Popular Topics
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Fullstack", "Python", "UX Design"].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setCourseName(topic)}
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-xs font-bold hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors border border-slate-700 hover:border-indigo-500/50"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-500">
          <BookOpen size={16} />
          <span className="text-sm font-medium">
            Curating resources for 1,000+ subjects
          </span>
        </div>
      </div>

      {/* Sharp Grid Pattern Overlay - Matching Home Page */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default AreaOfStudy;