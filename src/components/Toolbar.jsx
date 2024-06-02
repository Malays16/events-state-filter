import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter, index) => (
        <a
          href="#"
          key={index}
          className={`filter-btn ${filter === selected ? 'active' : ''}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </a>
      ))}
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
};

export default Toolbar;