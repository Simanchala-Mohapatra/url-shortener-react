import React from "react";
import { Code2, Briefcase, Star, GitBranch, ExternalLink } from "lucide-react";

const DeveloperDetails = () => {
  const skills = [
    "Java",
    "ReactJs",
    "SpringBoot",
    "JavaScript",
    "REST APIs",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  const projects = [
    {
      title: "URL Shortener",
      description:
        "Built a full-stack URL Shortener using React, Springboot, and PostgreSQL",
      tech: ["React", "SpringBoot", "PostgreSQL"],
      link: "https://heartfelt-cupcake-2fdae5.netlify.app/",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Developed a real-time analytics dashboard using NextJs and WebSocket",
      tech: ["NextJs", "WebSocket","Convex Db", "Clerk","ZegoCloud"],
      link: "#",
    },
    // {
    //   title: "Cloud-based CMS",
    //   description:
    //     "Created a headless CMS system with microservices architecture",
    //   tech: ["AWS", "Docker", "MongoDB"],
    //   link: "#",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Profile Image Section */}
            <div className="md:w-1/3 bg-gradient-to-b from-blue-400 to-purple-500 p-8">
              <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                <img
                  src="/profile-pic.png"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold mb-2">Simanchala Mohapatra</h1>
                <p className="text-blue-100 mb-4">Software Engineer</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Java Full Stack Developer
                  </p>
                  {/* <p>10+ Years Experience</p> */}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 p-8">
              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Passionate java full-stack developer with expertise in building
                  scalable web applications and microservices. Specialized in
                  React, Springboot and cloud technologies with a strong focus on
                  delivering high-quality, maintainable code and exceptional
                  user experiences.
                </p>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6 text-purple-600" />
                  Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700 font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured Projects */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Featured Projects
                </h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          className="text-purple-600 hover:text-purple-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GitHub Activity */}
              {/* <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-purple-600" />
                  GitHub Activity
                </h2>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">500+</p>
                      <p className="text-gray-700">Contributions</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">50+</p>
                      <p className="text-gray-700">Repositories</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">1000+</p>
                      <p className="text-gray-700">Commits</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">20+</p>
                      <p className="text-gray-700">Open Source</p>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDetails;
