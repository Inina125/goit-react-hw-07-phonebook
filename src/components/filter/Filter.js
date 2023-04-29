import { Field, Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleChange = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Field type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

export default Filter;
