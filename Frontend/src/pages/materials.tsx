import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Data {
  createdAt: Date;
  studyArea: string;
  websites: { title: string; url: string }[];
  youtubeVideos: { title: string; url: string }[];
}

import {
  Globe,
  Youtube,
  ExternalLink,
  BookOpen,
  Clock,
  ArrowLeft,
  Layout,
} from "lucide-react";

const Materials = () => {
  const params = useParams();
  const { courseName } = params || "React";

  const [data, setData] = useState<Data>();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/areaOfStudies`,
          {
            params: {
              courseName: courseName,
            },
          },
        );
        setData(response.data);
      } catch (err) {
        throw err;
      } finally {
        setLoader(false);
      }
    })();
  }, [params.courseName]);

  console.log(data, " it is actual data ");

  // Helper function to convert standard YouTube URLs to Embed URLs
  const getEmbedUrl = (url: any) => {
    try {
      if (!url) {
        return null;
      }
      if (url.includes("youtube.com/watch?v=")) {
        return url.replace("watch?v=", "embed/");
      }
      if (url.includes("youtu.be/")) {
        return url.replace("youtu.be/", "youtube.com/embed/");
      }
      if (url.includes("@")) {
        // For channel links, we provide a link instead of iframe as channels can't be easily iframed
        return null;
      }
      return url;
    } catch (e) {
      return null;
    } finally {
      console.log(data, "it is data after correcting the url ");
    }
  };

  if (loader) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading resources...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <Layout className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-800">
              No Materials Found
            </h2>
            <p className="text-slate-500 mt-2">
              Please go back and select a study area.
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {data.studyArea}
              </h1>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <Clock size={12} />
                <span>
                  Generated on {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
            <BookOpen size={16} />
            <span>Curated Resources</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Section: Websites */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Globe size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">
              Learning Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(data.websites || []).map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
                    <Globe
                      className="text-slate-400 group-hover:text-indigo-500"
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-slate-800 line-clamp-1 mb-1">
                    {site.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mb-4">
                    {site.url}
                  </p>
                </div>
                <div className="flex items-center justify-between text-indigo-600 text-sm font-medium mt-auto pt-2 border-t border-slate-50">
                  <span>Visit Resource</span>
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section: YouTube Videos/Channels */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 text-red-600 rounded-lg">
              <Youtube size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">
              YouTube Resources
            </h2>
             
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.youtubeVideos || []).map((channel, index) => {
              const embedUrl = getEmbedUrl(channel.url);

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {embedUrl ? (
                    <div className="aspect-video w-full bg-slate-900">
                      <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title={channel.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                        <Youtube className="text-red-500" size={32} />
                      </div>
                      <p className="text-slate-500 text-sm">
                        Channel link preview not available for iframes
                      </p>
                    </div>
                  )}

                  <div className="p-5 flex items-center justify-between gap-4">
                    <div className="overflow-hidden">
                      <h3 className="font-bold text-slate-900 line-clamp-1">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-slate-500 truncate mt-1">
                        Official Educational Channel
                      </p>
                    </div>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-xl transition-colors"
                    >
                      <ExternalLink size={18} />
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
