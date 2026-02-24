import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Globe,
  Youtube,
  ExternalLink,
  BookOpen,
  Clock,
  ArrowLeft,
  Layout,
  Sparkles,
} from "lucide-react";

const Materials = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { courseName } = params || { courseName: "React" };

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/areaOfStudies`,
          {
            params: {
              courseName: courseName,
            },
          }
        );
        if (isMounted) setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoader(false);
      }
    })();
    return () => { isMounted = false; };
  }, [courseName]);

  const getEmbedUrl = (url) => {
    try {
      if (!url) return null;
      if (url.includes("youtube.com/watch?v=")) return url.replace("watch?v=", "embed/");
      if (url.includes("youtu.be/")) return url.replace("youtu.be/", "youtube.com/embed/");
      if (url.includes("@")) return null;
      return url;
    } catch (e) {
      return null;
    }
  };

  if (loader) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
          <p className="text-slate-400 font-medium animate-pulse">Analyzing resources...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 text-center max-w-md">
          <div className="bg-slate-900/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layout className="w-8 h-8 text-slate-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No Materials Found</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We couldn't find any curated content for "{courseName}". Try searching for a broader term.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all shadow-lg"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 pb-20 relative overflow-x-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate(-1)}
              className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-slate-400"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent capitalize">
                {data.studyArea}
              </h1>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 mt-1 font-medium tracking-wide uppercase">
                <Clock size={12} className="text-indigo-500" />
                <span>Updated {new Date(data.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <Sparkles size={14} />
            <span>Curated Elite</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Section: Websites */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <Globe size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Essential Websites</h2>
              <p className="text-xs text-slate-500 font-medium">Top documentation and interactive platforms</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.websites || []).map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors border border-slate-700 group-hover:border-indigo-500/30">
                    <Globe className="text-slate-500 group-hover:text-indigo-500 transition-colors" size={24} />
                  </div>
                  <div className="p-2 bg-slate-800/50 rounded-lg text-slate-500 group-hover:text-white transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors line-clamp-1">
                    {site.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate font-mono bg-slate-950/50 p-2 rounded-lg border border-slate-800/50">
                    {site.url}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section: YouTube Videos */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.1)]">
              <Youtube size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Visual Learning</h2>
              <p className="text-xs text-slate-500 font-medium">Expert tutorials and deep-dives</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(data.youtubeVideos || []).map((video, index) => {
              const embedUrl = getEmbedUrl(video.url);

              return (
                <div
                  key={index}
                  className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-[2rem] overflow-hidden hover:border-rose-500/40 transition-all duration-300 shadow-xl"
                >
                  <div className="aspect-video w-full bg-slate-950 relative overflow-hidden">
                    {embedUrl ? (
                      <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900/80">
                        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                          <Youtube className="text-rose-500/50" size={40} />
                        </div>
                        <p className="text-slate-400 text-sm max-w-[200px]">
                          Interactive preview unavailable. Use external link to watch.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex items-center justify-between gap-6">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-1">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase rounded border border-rose-500/20 tracking-tighter">
                          YouTube
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium italic">Elite Course Material</span>
                      </div>
                    </div>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-12 h-12 bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 rounded-2xl transition-all flex items-center justify-center border border-slate-700 hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Materials;