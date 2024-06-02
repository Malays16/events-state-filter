import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import PropType from 'prop-types';

export default function Portfolio({ projectList }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  const filter = filterName => {
    if (filterName === 'All') {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(projectList.filter(project => project.category === filterName));
    }
    setSelectedFilter(filterName);
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selectedFilter}
        onSelectFilter={filter}
      />
      <div className="projects">
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  projectList: PropType.array
};