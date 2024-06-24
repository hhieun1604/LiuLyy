import React from 'react'
import { Button, Grid, Typography } from '@mui/material'


const Footer = () => {
  return (
    <div>
       <Grid className='bg-black text-while text-center mt-10'
       container
       sx={{bgcolor:"black", color:"white",py:3}}
       > 
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pd-5' variant='h6'> Company </Typography>
                  <div>
             ``     <Button className='pd-3' variant='h6'> About </Button>
                  </div>
                  
                  <div>
                     <Button className='pd-3' variant='h6'> Blog </Button>
                  </div>

                  <div>
                     <Button className='pd-5' variant='h6'> Jobs </Button>
                  </div>

                  <div>
                     <Button className='pd-5' variant='h6'> Partners </Button>
                  </div>

            </Grid>
       </Grid>

    </div>  
  )
}           
// serve -s build
export default Footer