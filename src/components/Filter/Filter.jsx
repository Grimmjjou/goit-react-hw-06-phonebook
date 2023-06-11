import styles from './Filter.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filter';

export function Filter() {
  const dispatch = useDispatch();
  const changeInput = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <label className={styles.filterLabel}>
      Find contact by the name{' '}
      <input type="text" name="filter" onChange={changeInput}></input>
    </label>
  );
}
