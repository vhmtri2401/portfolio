import { Metadata } from 'next';
import Image from 'next/image';
import { getPortfolioData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, education, experience, and skills.',
};

export default function AboutPage() {
  const data = getPortfolioData();

  return (
    <div className="py-20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            My journey in AI and Data Science
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt={data.profile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bio Content */}
                <div>
                  <h2 className="text-2xl font-bold mb-2">{data.profile.name}</h2>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {data.profile.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {data.profile.bio}
                  </p>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Education</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {data.education.map((edu) => (
                <div key={edu.id} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{edu.dates}</span>
                        <span>{edu.location}</span>
                        {edu.gpa && <span className="font-medium">GPA: {edu.gpa}</span>}
                      </div>
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

              {/* Timeline items */}
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-8 md:mb-12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 mt-1.5 border-4 border-white dark:border-gray-950" />

                  <div
                    className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                  >
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {exp.dates}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {exp.org}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''
                        }`}
                    >
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-primary-500 flex-shrink-0 mt-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        {data.awards && data.awards.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Awards & Certifications</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.awards.map((award) => (
                <div key={award.id} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{award.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {award.description}
                      </p>
                      {award.year && (
                        <span className="text-xs text-primary-600 dark:text-primary-400 mt-2 block">
                          {award.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {data.publications && data.publications.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Publications</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {data.publications.map((pub) => (
                <article key={pub.id} className="glass-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{pub.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {pub.authors}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mt-2">
                        {pub.venue} &bull; {pub.year}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {pub.links.paper && (
                        <a
                          href={pub.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          aria-label="View paper"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </a>
                      )}
                      {pub.links.code && (
                        <a
                          href={pub.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          aria-label="View code"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Research Skills */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Research</h3>
              <ul className="space-y-2">
                {data.skills.research.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Skills */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                {data.skills.engineering.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools & Frameworks</h3>
              <ul className="space-y-2">
                {data.skills.tools.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
