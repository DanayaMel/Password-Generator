import React, { useState } from 'react';
import './App.css';
import Heading from '../Heading/Heading';
import Password from '../Password/Password';
import PasswordGeneratorOptions from '../PasswordGeneratorOptions/PasswordGeneratorOptions';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  const [password, setPassword] = useState(['']);

  const updatePassword = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <Box className="box">
        <Grid container className="grid" spacing={2}>
          <Grid item xs={12}>
            <Heading className="heading"/>
          </Grid>
          <Grid item xs={12}>
            <Password className='password' password={password}/>
          </Grid>
          <Grid item xs={12}>
            <PasswordGeneratorOptions className='passwordGeneratorOptions' password={password} updatePassword={updatePassword} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
