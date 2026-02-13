import { Metadata } from 'next';
import { getPortfolioData, getAllTags } from '@/lib/data';
import { ProjectsList } from '@/components/ProjectsList';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of AI and machine learning projects.',
};

export default function ProjectsPage() {
  const data = getPortfolioData();
  const allTags = getAllTags();

  return (
    <div className="py-20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            A comprehensive collection of my work in artificial intelligence,
            machine learning, and software engineering.
          </p>
        </div>

        {/* Projects List with Filters */}
        <ProjectsList projects={data.projects} allTags={allTags} />
      </div>
    </div>
  );
}
