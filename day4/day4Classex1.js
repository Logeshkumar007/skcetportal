import {Autocomplete,Box,Button,TextField, Typography,Grid, Container} from '@mui/material'
import './css files/day4classex12.css'
import { useState } from 'react';
export default function AutocompleteDemo()
{
    const [values,SetValues]=useState('');
    const [temp,Settemp]=useState('');
    function HandleTemp(e)
    {
        console.log(e.target.value);
        Settemp(e.target.value);
    }
    function Handle()
    {
        console.log(temp);
        SetValues(temp);
    }
    const fruit=['banana','grape','cherry','kiwi','orange'];
    return(
        <>
        <Box display='flex' flexDirection='column'>
        <Typography variant='h3'>Fruits</Typography>
        <hr></hr>
        <br></br>
        <div id="auto">
        
        <Autocomplete options={fruit}
        sx={{width:400}}
        onInputChange={HandleTemp}
        renderInput={(val)=><TextField{...val} label='Fruits'/>}
        />
        </div>
        <Button id='bt1' variant='contained' onClick={Handle}>Select</Button>
        <h1>{values}</h1>
        </Box>
        </>
    )
}
