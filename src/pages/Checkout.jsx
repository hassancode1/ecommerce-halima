import Box from '@mui/material/Box';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import logo from '../assets/logo.png';

const Checkout = () => {
    const [Countryregion, setCountryregion] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className="">
            <header className='h-[100px] bg-footerLight flex items-center justify-center gap-5'>
             <img src={logo} alt="" />
             <p className="text-cute text-lg font-bold">Cute Tiny Toe</p>
            </header>
            <section className='px-8 pt-10 pb-20'>
              {/*  CONTACT */}
                <div>
                    <p className='text-base text-footerDark'>Contact</p>
                    <TextField sx={{minWidth: 100, marginTop:"20px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="Email" type="search" /> 
        
        
                </div>
                    {/*  CONTACT */}

                        {/*  Address */}
                <div className='mt-5'>
                    <h1 className='text-sm text-footerDark'>Shipping Address</h1>
                    <Box sx={{ minWidth: 100, paddingTop:'10px', }}>
      <FormControl fullWidth sx={{backgroundColor:'#F7F7F7',  }}>
        <InputLabel id="demo-simple-select-label">Country/region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Countryregion}
          label="Country/region"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
       </Box>
                </div>
              {/*  Address */}


                  {/* FirstName/LastName */}
                <div className='flex mt-3 gap-10'>
                <div>
                    <label >First Name</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="John" type="search" /> 
                </div>
                <div>
                    <label >Last Name</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="Doe" type="search" /> 
                </div>
                </div>
                 {/* FirstName/LastName */}

                {/* ADDRESS */}
                <div className='mt-3'>
                    <label >Address</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="221B Baker St" type="search" /> 
                </div>
                 {/* ADDRESS */}

                 {/* City State */}
               
                <div className='flex mt-3 gap-10'>
                <div>
                    <label >City</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="City" type="search" /> 
                </div>
                <div>
                    <label >State</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="State" type="search" /> 
                </div>
                </div>
                    {/* City State */}


                    {/* Phone number */}
                    <div className='mt-3'>
                    <label >Phone Number</label>
                    <TextField sx={{minWidth: 100, marginTop:"10px", backgroundColor:'#F7F7F7',   }}  fullWidth id="outlined-search" label="+234" type="search" /> 
                </div>

                {/* Button */}
                <div className='mt-5 flex justify-between items-center sm:flex-col-reverse sm:gap-4'>
                    <div className='flex justify-between items-center sm:gap-[10rem] gap-4'> 
                        <KeyboardBackspaceIcon style={{color:"#A77866",}}/>
                        <p className='text-cute'>Back to cart</p>
                        </div>
                        <button className='bg-cute text-white py-2 text-sm w-[200px] sm:w-full mt-2 rounded-md'>Continue Payment</button>
                       </div>
                    </section>
                  </div>
    );
};

export default Checkout;
