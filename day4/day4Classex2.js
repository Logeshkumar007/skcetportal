import { Autocomplete, Button, TextField } from "@mui/material";
import '../App.css';
import { useState } from "react";
export default function Fruitex() {
    const [val1,setVal1]=useState('You');
    const [val2,setVal2]=useState('{gotcha select a fruit first}');
    function handle(event){
        event.preventDefault();
        setVal1(event.target[0].value);
        setVal2(event.target[1].value);
    }
    const fruit = ['apple', 'orange', 'grape', 'banana'];
    return (
        <form onSubmit={handle}>

            <div id='t'>
                <div id='div2'>
                    <label id="la">Name : 
                    </label> <TextField variant="standard" label='Enter Name'></TextField>
                </div>
                <br></br>

                <Autocomplete
                    options={fruit}
                    sx={{ width: 400 }}
                    renderInput={(val) => <TextField {...val} label='Choose a Fruit' />}
                    />
                    <br></br>

                <Button variant="contained" type="submit">SUBMIT</Button>
                <p>Hello,{val1} your favourite fruit is {val2}</p>
            </div>
        </form>

        // <Autocomplete options={fruit}
        // sx={{width:400}}
        // onInputChange={HandleTemp}
        // renderInput={(val)=><TextField{...val} label='Fruits'/>}
        // />
    )
}