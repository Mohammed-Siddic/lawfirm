import React from 'react';
import igstudio from '../../assets/Ig Studio.png';
import styles from './Navbar.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <img src={igstudio} alt="igstd" className={styles.navimg} />
    <div className={styles.navbarText}>
    <Button variant="text" sx={{color:'white'}}>Home</Button>
    <Button variant="text" sx={{color:'white'}}>Attorneys</Button>
    <Button variant="text" sx={{color:'white'}}>Practice Areas</Button>
    <Button variant="text" sx={{color:'white'}}>About</Button>
    </div>
    <Stack spacing={2} direction="row">
      <Button variant="outlined" sx={{color:'white'}}>Contact Now</Button>
    </Stack>
    </div>
  )
}

export default Navbar;