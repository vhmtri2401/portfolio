'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';

interface ProjectsListProps {
  projects: Project[];
  allTags: string[];
}

export function ProjectsList({ projects, allTags }: ProjectsListProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesTag && matchesSearch;
    });
  }, [projects, selectedTag, searchQuery]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Tag Filter */}
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Tag Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedTag === ''
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTag === tag
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No projects found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
