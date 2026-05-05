import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Globe,
  Youtube,
  ExternalLink,
  ArrowLeft,
  LayoutGrid,
  PlayCircle,
  Link2
} from "lucide-react";

interface Data {
  createdAt: Date;
  studyArea: string;
  websites: { title: string; url: string }[];
  youtubeVideos: { title: string; url: string }[];
}

const Materials = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<Data | null>(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          `http://localhost:3000/areaOfStudies`,
          {
            params: {
              courseName: courseName || "React",
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error("Failed to fetch materials:", err);
      } finally {
        setLoader(false);
      }
    })();
  }, [courseName]);

  const getEmbedUrl = (url: string) => {
    try {
      if (!url) return null;
      if (url.includes("youtube.com/watch?v=")) {
        return url.replace("watch?v=", "embed/");
      }
      if (url.includes("youtu.be/")) {
        return url.replace("youtu.be/", "youtube.com/embed/");
      }
      if (url.includes("@")) {
        return null;
      }
      return url;
    } catch (e) {
      return null;
    }
  };

  if (loader) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-50">
        <div className="w-12 h-12 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold mb-2">Curating Resources...</h2>
        <p className="text-slate-400">Finding the best materials for {courseName}</p>
      </div>
    );
  }

  if (!data || (!data.websites?.length && !data.youtubeVideos?.length)) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-50">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <LayoutGrid className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold mb-3">No Materials Found</h2>
          <p className="text-slate-400 mb-8">
            We couldn't find curated resources for "{courseName}". Try searching for another topic.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              Curated Syllabus
            </p>
            <h1 className="text-xl md:text-2xl font-bold leading-none truncate">
              {data.studyArea}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Websites Section */}
        {data.websites && data.websites.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold">Documentation & Web</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.websites.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                      <Link2 size={20} />
                    </div>
                    <ExternalLink size={16} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {site.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-auto pt-4 truncate">
                    {new URL(site.url).hostname}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Section */}
        {data.youtubeVideos && data.youtubeVideos.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold">Video Tutorials</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.youtubeVideos.map((video, index) => {
                const embedUrl = getEmbedUrl(video.url);

                return (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col"
                  >
                    {embedUrl ? (
                      <div className="aspect-video w-full bg-black relative">
                        <iframe
                          className="w-full h-full absolute top-0 left-0"
                          src={embedUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-slate-800 flex flex-col items-center justify-center p-6 text-center">
                        <PlayCircle className="w-12 h-12 text-slate-500 mb-3" />
                        <h3 className="font-bold mb-1">{video.title}</h3>
                        <p className="text-sm text-slate-400">Direct channel link</p>
                      </div>
                    )}

                    <div className="p-6 flex items-start justify-between gap-4 bg-slate-900 flex-grow">
                      <div>
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
                        <p className="text-slate-400 text-sm">YouTube Resource</p>
                      </div>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 hover:bg-red-500 hover:text-white text-slate-300 rounded-xl transition-colors shrink-0"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Materials;
