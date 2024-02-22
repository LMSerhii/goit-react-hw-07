// import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { getQuery } from '../../redux/selectors';

export default function SearchBox() {
  // const searchBoxId = useId();
  const dispatch = useDispatch();
  const query = useSelector(getQuery);

  return (
    <div className={css.searchBox}>
      {/* <label className={css.label} htmlFor={searchBoxId}>
        Find contacts by name or phone
      </label> */}
      <input
        className={css.input}
        type="text"
        value={query}
        // id={searchBoxId}
        name="searchContact"
        placeholder="Search contact"
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </div>
  );
}
