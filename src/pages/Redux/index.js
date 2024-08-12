import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync } from '../../redux/actions/index';
import Button from '../../conponents/Button/index'
import './index.css'
const ReduxPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  return (
    <div className='container'>
     
      <h5 className='reduxCounter_title'> let's Play with Counter App 😎</h5>
      <br/>
      <div className='reduxCounter'>
      <span onClick={() => dispatch(decrementAsync(counter-1))} disabled={loading}>
      <Button content={'-'} />
      </span>
      <span>{counter}</span>
      <span  onClick={() => dispatch(incrementAsync(counter+1))} disabled={loading}>
      <Button content={'+'} />
      </span>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default ReduxPage;
