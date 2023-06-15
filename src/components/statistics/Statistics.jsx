import PropTypes from 'prop-types';
import { StatsItem } from './StatsItem';
import './Statistics.css';

export const Statistics = ({ stats, title }) => {
  const groupedStats = stats.reduce((acc, data) => {
    if (acc[data.label]) {
      acc[data.label] += data.percentage;
    } else {
      acc[data.label] = data.percentage;
    }
    return acc;
  }, {});

  const groupedStatsArray = Object.entries(groupedStats).map(
    ([label, percentage]) => ({
      label,
      percentage,
    })
  );

  return (
    <>
      <section className="statistics container">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {groupedStatsArray.map(data => {
            return (
              <li key={data.label} className="item">
                <StatsItem label={data.label} percentage={data.percentage} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
