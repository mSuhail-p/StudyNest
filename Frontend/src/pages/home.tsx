import { useNavigate } from "react-router-dom";
import { ArrowRight, Search, BookOpen, Zap } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <BookOpen size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">StudyNest</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Smart Learning Hub
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Master any topic with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              curated resources.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Stop searching and start learning. StudyNest organizes the best documentation, websites, and video tutorials for exactly what you want to study.
          </p>

          <button
            onClick={() => navigate("/area-of-study")}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 hover:bg-indigo-50 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          {/* Feature 1 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
              <Search className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Topic Based</h3>
            <p className="text-slate-400 leading-relaxed">
              Enter any subject, tool, or language. We find the most relevant materials tailored to that exact topic.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <BookOpen className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Web & Docs</h3>
            <p className="text-slate-400 leading-relaxed">
              Access official documentation, high-quality articles, and interactive platforms instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Zap className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Video Courses</h3>
            <p className="text-slate-400 leading-relaxed">
              Prefer watching? We bring you the top-rated YouTube tutorials and crash courses directly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
