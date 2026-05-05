import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft, Lightbulb } from "lucide-react";

const AreaOfStudy = () => {
  const [courseName, setCourseName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!courseName.trim()) return;
    try {
      navigate(`/materials/${encodeURIComponent(courseName.trim())}`);
    } catch (err) {
      console.error(err, ": error on areaOfStudy component");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleClick();
  };

  const suggestions = ["React", "Python", "UI Design", "Data Structures"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans">
      {/* Top Bar */}
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 -mt-20">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            What do you want to learn?
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            Type a subject, and we'll gather the best resources for you.
          </p>

          {/* Search Box */}
          <div className="relative flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400">
                <Search size={22} />
              </div>
              <input
                type="text"
                autoFocus
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Node.js, Web3, Machine Learning..."
                className="w-full pl-14 pr-6 py-5 bg-slate-900 border border-slate-700 text-white rounded-2xl text-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 shadow-xl"
              />
            </div>
            <button
              onClick={handleClick}
              disabled={!courseName.trim()}
              className={`py-5 px-8 rounded-2xl font-bold text-lg whitespace-nowrap transition-all ${
                courseName.trim()
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/25"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              Search
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm font-medium">
              <Lightbulb size={16} />
              <span>Popular searches</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setCourseName(topic)}
                  className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-colors text-sm"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AreaOfStudy;