import React from "react";

const Projects = () => {
  return (
    <section
      name="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-400
            bg-clip-text text-transparent text-center
        "
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">Edusity</h3>
              <p className="text-gray-400 mb-4">
                Edusity is a responsive educational website.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "CSS", "GitHub Pages"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition
                "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className="flex justify-between items-center
            "
              >
                <a
                  href="https://frontdev24kv.github.io/edusity/"
                  target="_blank"
                  className="my-5 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Projects;
