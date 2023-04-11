import PropTypes from 'prop-types';

export const UserStats = ({ id, label, percentage }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          {id}
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          {id}
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          {id}
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
          {id}
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};


UserStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
