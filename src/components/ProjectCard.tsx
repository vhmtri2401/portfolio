import Link from 'next/link';
import { Project } from '@/lib/data';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-card overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
        <ProjectImage
          src={project.image}
          alt={project.title}
          fallbackLetter={project.title.charAt(0)}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Role & Outcomes */}
        <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
          <p>
            <span className="font-medium text-gray-700 dark:text-gray-300">Role:</span>{' '}
            {project.role}
          </p>
          <p className="mt-1">
            <span className="font-medium text-gray-700 dark:text-gray-300">Outcome:</span>{' '}
            {project.outcomes}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
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
              Paper
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
