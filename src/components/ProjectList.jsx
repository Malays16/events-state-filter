import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    projects.map((project, index) => (
      <div className="project" key={index++}>
        <img src={project.img} alt="" />
      </div>
    ))
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array
};

export default ProjectList;