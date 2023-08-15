import css from './container.module.css';
import PropTypes from 'prop-types';
export const ContainerForDownloads = ({ title, stats }) => {
  return (
    <>
      {title && <h1 className={css.titleOfDownloads}>{title}</h1>}
      <ul className={css.listOfDownloads}>
        {stats.map(elem => {
          const randomBackgroundColor = getRandomColor();
          const dynamicStyle = {
            backgroundColor: randomBackgroundColor,
          };

          return (
            <li key={elem.id} className={css.item} style={dynamicStyle}>
              <span className={css.label}>{elem.label}</span>
              <span className={css.percentage}>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



ContainerForDownloads.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
