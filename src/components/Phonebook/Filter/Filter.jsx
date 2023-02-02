import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import styles from './filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel} htmlFor="inputid">
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          inputid={nanoid()}
          required
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
