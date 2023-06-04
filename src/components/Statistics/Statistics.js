import PropTypes from 'prop-types';
import data from './data.json';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title"></h2>
    <ul className="stat-list">
      <li className="item">
        <span className="label"></span>
        <span className="percentage"></span>
      </li>
    </ul>
  </section>
);

function itemList() {
  console.log('data');
}

itemList();
