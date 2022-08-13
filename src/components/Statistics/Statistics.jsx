import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ data }) {
  console.log(data[0].id);
  return (
    <section className={css.stts}>
      {data.length === 0 ? (
        <h2 className={css.title}>No uploads</h2>
      ) : (
        <h2 className={css.title}>Upload stats</h2>
      )}
      <ul className={css.list}>
        {data.map(el => (
          <li
            key={el.id}
            style={{ width: `${el.percentage * 5.5}px` }}
            className={css.item}
          >
            <div>{el.label} </div>
            <div>{el.percentage}%</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
