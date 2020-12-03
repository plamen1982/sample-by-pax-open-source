import React from 'react';
import { 
    TextField,
    Grid,
    Button
} from '@material-ui/core';

const Login = () => {
    return (
        <Grid container >
            <Grid item xs={12}>
                <form>
                    <TextField 
                        label="Email"
                    />
                    <TextField 
                        label="Password"
                    />
                    <Button variant="contained">Login</Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default Login;