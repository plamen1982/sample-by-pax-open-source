import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    increment,
     // eslint-disable-next-line
    // incrementByAmount,
    decrement,
    selectCount
} from '../counter/counterSlice';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    // const [ incrementAmount, setIncrementAmount ] = useState('2');

    return(
        <Box>
            <div>{count}</div>
            <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
                +
            </Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>
                -
            </Button>
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </Box>
    );
}

export default Counter;