import PropTypes from 'prop-types';
import data from './data.json';
import css from './Statistics.module.css';

export const Statistics = ({ title = 'Upload Stats', stats = data }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
      {stats.map(el => {
        return (
          <li
            className={css.item}
            key={el.id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
