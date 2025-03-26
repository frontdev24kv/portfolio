import React from "react";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
  return (
    <section
      name="about"
      className="min-h-screen flex items-center justify-center py-20 flex-col"
    >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </div>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1  transition-all">
          <p className="text-gray-300 mb-6 text-center p-5">
            Passionate developer with experience in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition
                "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition
                "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">
                🎓 Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Python Developer</strong>- Mate academy 2023-2024
                </li>
                <li>
                  <strong>Frontend Developer</strong>- CyberBionic Systematics
                  2025
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">
                💼 Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="font-semibold">Intern at IEF startups (2024)</h4>
                <p>
                  Assisted in building front-end components and integratuon REST
                  APIs
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
